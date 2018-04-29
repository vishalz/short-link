import React from 'react';
import PropTypes from 'prop-types';
import { LinksDB } from './../api/LinksDB';

export default class AddLink extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  };//end of constructor

  handleSubmit(e){
    e.preventDefault();
    const url = this.refs.url.value.trim();
    Meteor.call('links.insert',url,(err)=>{
      if(err){
        this.setState({error: err.reason});
      } else{
        this.setState({error: ''});
        this.refs.url.value = '';
      }
    });//end of call
  };//end of handleSubmit

  render(){
    return(
      <div>
        <p>{ this.state.error ? this.state.error : undefined } </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref='url' type='text' placeholder='url'></input>
          <button>Add Link</button>
        </form>
      </div>
    );
  };
};//end of AddLink

AddLink.propTypes = {

};
