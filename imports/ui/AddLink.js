import React       from 'react';
import PropTypes   from 'prop-types';
import Modal       from 'react-modal';
import { LinksDB } from './../api/LinksDB';

export default class AddLink extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: '',
      url: '',
      isOpen: false
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
        this.setState({url: '', isOpen: false});
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
        <button onClick={()=>this.setState( {isOpen: true} ) }> + Add Link </button>
        <Modal isOpen={this.state.isOpen} contentLabel='Add Link'> 
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
          <button onClick={()=> this.setState({isOpen: false, url: ''})}>Cancel</button>
        </Modal>
      </div>
    );
  };
};//end of AddLink

AddLink.propTypes = {

};
