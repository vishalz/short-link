import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

const PrivateHeader = (props)=>{
  return(
      <div>
        <h1>{props.title ? props.title : 'Your Links' }</h1>
        <button onClick={()=> Meteor.logout()}>Log Out</button>
      </div>
    );
};//end of PrivateHeader

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
