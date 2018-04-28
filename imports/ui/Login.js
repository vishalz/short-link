import React        from 'react';
import PropTypes    from 'prop-types';
import { Accounts } from 'meteor/accounts-base';
import { Link }     from 'react-router';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  };//end of constructor

  handleSubmit(e){
    e.preventDefault();
    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();
    if(email){
      Meteor.loginWithPassword(email,password,(err)=>{
        if(err){
          this.setState({error: err.reason});
        }else{
          this.setState({error: ''});
          this.refs.email.value = '';
          this.refs.password.value = '';
        }
      });//end of createUser
    } 
  };//end of handleSubmit

  render(){
    return(
      <div>
        <h1> Log In to see your Links</h1>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleSubmit.bind(this)} noValidate>
          <input ref='email' type='email' placeholder='email'/>
          <input ref='password' type='password' placeholder='password'/>
          <button>Log In</button>
        </form>
        <Link to='/signup'>Need a Login?</Link>
      </div>
    );
  };
};//end of Login

Login.propTypes = {

};
