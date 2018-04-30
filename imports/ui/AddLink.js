import React from 'react';
import PropTypes from 'prop-types';
import { LinksDB } from './../api/LinksDB';

export default class AddLink extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: '',
      url: ''
    };
  };//end of constructor

  handleSubmit(e){
    e.preventDefault();
    const url = this.state.url.trim();
    Meteor.call('links.insert',url,(err)=>{
      if(err){
        this.setState({error: err.reason});
      } else{
        this.setState({error: ''});
        this.setState({url: ''});
      }
    });//end of call
  };//end of handleSubmit

  onChange(e){
    const url = e.target.value;
    this.setState({url});
  };//end of onChanged

  render(){
    return(
      <div>
        <p>{ this.state.error ? this.state.error : undefined } </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type='text' 
            onChange={this.onChange.bind(this)} 
            value={this.state.url}
            placeholder='url'>
          </input>
          <button >Add Link</button>
        </form>
      </div>
    );
  };
};//end of AddLink

AddLink.propTypes = {

};
