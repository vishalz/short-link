import { Meteor }                from 'meteor/meteor';
import { Tracker}                from 'meteor/tracker';
import React                     from 'react';
import ReactDOM                  from 'react-dom';
import { routes , redirectUser } from './../imports/routes/routes';

import './../imports/startup/simple-schema-config';

Tracker.autorun(()=>{
  const isLoggedIn = !!Meteor.userId();
  redirectUser(isLoggedIn);
});//end of Tracker

Meteor.startup(()=>{
  ReactDOM.render(routes,document.getElementById('app'));
});//end of startup
