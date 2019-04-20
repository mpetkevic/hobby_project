import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './NavBar.scss';


class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <Logo/>
        <nav>
          <ul>
            <NavLink exact to='/' className='NavBar-link' activeClassName='active-link'>Home</NavLink>
            <NavLink to='/projects' className='NavBar-link' activeClassName='active-link'>Projects</NavLink>
            <NavLink to='/project-registration' className='NavBar-link New-Project' activeClassName='active-link'>New Project</NavLink>
          </ul>
        </nav>
        <div>
          <Link className='SignIn-link' to='/login'>Sign In</Link>
          <Link className='SignIn-link' to='/register'>Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;