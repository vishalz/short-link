import React      from 'react';
import PropTypes  from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class Links extends React.Component{
  render(){
    return(
      <div>
        <h1>Your Links</h1>
        <button onClick={()=>Meteor.logout()}>Log Out</button>
      </div>
    );
  };
};//end of Links

Links.propTypes = {

};
