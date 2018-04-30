import { Mongo }    from 'meteor/mongo';
import { Meteor }   from 'meteor/meteor';
import shortid      from 'shortid';
import SimpleSchema from 'simpl-schema';

export const LinksDB = new Mongo.Collection('links');

if(Meteor.isServer){
  Meteor.publish('links' , function(){
    const userId = this.userId;
    return LinksDB.find({userId});
  });
}

Meteor.methods({

  'links.insert'(url,visible=true){

    const userId = Meteor.userId();

    if(!userId){
      throw new Meteor.Error(401,'User Not Logged In');
    }
    
    new SimpleSchema({
      url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: 'link'
      },
      visible: {
        type: Boolean,
        optional: true
      }
    }).validate({url});//end of validate

    LinksDB.insert({
      _id: shortid.generate(),
      url,
      userId,
      visible
    });
  },//end of links.insert

  'links.setVisibility'(_id,visible){
    
    const userId = Meteor.userId();

    if(!userId){
      throw new Meteor.Error(401,'User Not Logged In');
    }
    
    new SimpleSchema({
      _id: {
        type  : String,
        min   : 1,
        label : 'short url'
      },
      visible: {
        type: Boolean,
      }
    }).validate({_id,visible});//end of validate

    LinksDB.update({_id, userId},{$set : {visible}});//end of update

  },//end of links.setVisibiity

});//end of methods
