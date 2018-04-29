import SimpleSchema from 'simpl-schema';
import { Meteor }   from 'meteor/meteor';

SimpleSchema.defineValidationErrorTransform((error)=>{
  const mError = new Meteor.Error(400,error.message);
  return mError;
});
