import { Meteor } from 'meteor/meteor';
import { LinksDB } from './../imports/api/LinksDB';
import './../imports/api/users';
import './../imports/startup/simple-schema-config';

Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use((req,res,next)=>{
    const _id = req.originalUrl.slice(1);
    const link = LinksDB.findOne({_id});
    if(link){
      res.statusCode = 302;
      res.setHeader('Location',link.url);
      res.end();
    }else{
      next();
    };
  });
  
});
