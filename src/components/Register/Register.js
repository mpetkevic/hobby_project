import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Register.scss'

class Register extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className='Register'>
        <h2>Please Sign Up</h2>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name='username' placeholder='Please enter your name'/>
          <input type="email" name='email' placeholder='Please enter your email'/>
          <input type="password" name='password' placeholder='Please enter your password'/>
          <input type="password" name='password2' placeholder='Please repeat your password'/>
          <button type="submit">Submit</button>
        </form>
        <p style={{fontSize: '12px'}}>If you don't have account, please{' '}
          <Link className='Link' to='/login'>Sign In</Link>
        </p>
      </div>
    );
  }
}

export default Register;