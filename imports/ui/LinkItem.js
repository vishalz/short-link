import React      from 'react';
import PropTypes  from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Clipboard  from 'clipboard';



export default class LinkItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      justCopied: false,
    };
  };//end of constructor
  componentDidMount(){
    this.clipboard = new Clipboard(this.refs.copy)
    this.clipboard.on('success',()=>{
      this.setState({justCopied: true});
      console.log('clipboard successs');
      setTimeout(function(){
       this.setState({justCopied: false}); 
      }.bind(this),3000);
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
        <button ref='copy' data-clipboard-text={this.props.shortUrl}>
          { this.state.justCopied ? 'Copied' : 'Copy' }
        </button>
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
