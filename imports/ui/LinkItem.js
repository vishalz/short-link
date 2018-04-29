import React      from 'react';
import PropTypes  from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class LinkItem extends React.Component{
  render(){
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <button>Hide</button>
        <button>Copy</button>
      </div>
    );
  };
};//end of LinkItem

LinkItem.propTypes = {
  _id      : PropTypes.string.isRequired,
  url      : PropTypes.string.isRequired,
  userId   : PropTypes.string.isRequired,
  shortUrl : PropTypes.string.isRequired,

};
