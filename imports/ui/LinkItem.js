import React      from 'react';
import PropTypes  from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Clipboard  from 'clipboard';



export default class LinkItem extends React.Component{
  componentDidMount(){
    this.clipboard = new Clipboard(this.refs.copy)
    this.clipboard.on('success',()=>{
      console.log('clipboard successs');
    }).on('error',()=>{
      console.log('clipboard error');
    });

  };//end of component didmount

  componentWillUnmount(){
    this.clipboard.destroy();
  };

  render(){
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <button ref='copy' data-clipboard-text={this.props.shortUrl}>Copy</button>
        <button>Hide</button>
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
