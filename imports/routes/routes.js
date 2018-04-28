import React                               from 'react';
import { Router , Route , browserHistory } from 'react-router';
import SignUp                              from './../ui/SignUp';
import Login                               from './../ui/Login';
import Links                               from './../ui/Links';
import NotFound                            from './../ui/NotFound';

const authenticatedPages = ['/links'];
const unAuthenticatedPages = ['/','/signup'];

const onEnterPublic = ()=>{
  if(Meteor.userId()){
    browserHistory.replace('/links');
  }
};//end of onEnterPublic

const onEnterPrivate = ()=>{
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};//end of onEnterPrivate

export const routes = (
  <Router history={browserHistory}>
    <Route path='/'       component ={Login} onEnter={onEnterPublic}/>
    <Route path='/signup' component ={SignUp} onEnter={onEnterPublic}/>
    <Route path='/links'  component ={Links} onEnter={onEnterPrivate}/>
    <Route path='*'       component ={NotFound} />
  </Router>
);

export const redirectUser = (isLoggedIn)=>{
  const pathName = browserHistory.getCurrentLocation().pathname;
  const aPage = authenticatedPages.includes(pathName);
  const unAPage = unAuthenticatedPages.includes(pathName);
  if(aPage && !isLoggedIn){
    browserHistory.replace('/');
  } else if(unAPage && isLoggedIn){
    browserHistory.replace('/links');
  }


};// redirectUser
