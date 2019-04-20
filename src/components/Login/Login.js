import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Login.scss';


class Login extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className='Login'>
        <h2>Please Sign In</h2>
        <form onSubmit={this.onFormSubmit}>
          <input type="email" name='email' placeholder='Please enter yours email'/>
          <input type="password" name='password' placeholder='Please enter yours password'/>
          <button type="submit">Submit</button>
        </form>
        <p style={{fontSize: '12px'}}>If you don't have account, please{' '}
          <Link className='Link' to='/register'>Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default Login;