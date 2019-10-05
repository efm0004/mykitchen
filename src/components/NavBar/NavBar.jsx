import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>log out</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>login</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>sign up</Link>
    </div>;

  return (
    <div className='NavBar'>
      <Link to='/' className='NavBar-link'>MyKitchen</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {nav}
    </div>
  );
};

export default NavBar;