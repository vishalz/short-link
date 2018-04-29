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

  'links.insert'(url){

    const userId = Meteor.userId();

    if(!userId){
      throw new Meteor.Error(401,'User Not Logged In');
    }
    
    new SimpleSchema({
      url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: 'link'
      }
    }).validate({url});//end of validate

    LinksDB.insert({
      _id: shortid.generate(),
      url,
      userId
    });
  },//end of links.insert

});//end of methods
