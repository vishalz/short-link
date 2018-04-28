import SimpleSchema from 'simpl-schema';

SimpleSchema.defineValidationErrorTransform((error)=>{
  const mError = new Meteor.Error(400,error.message);
  return mError;
});
