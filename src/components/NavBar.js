import React from 'react';
import '../styles/NavBar.css';
import logo from '../assets/logo.JPG';
import { Link } from 'react-scroll';
import ContactIcon from '../assets/contact.png';

function NavBar() {
  return (
    <nav className='navBar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='deskstopMenu'>
          <Link className='deskstopMenuListItem'>Home</Link>
          <Link className='deskstopMenuListItem'>About</Link>
          <Link className='deskstopMenuListItem'>Portfolio</Link>
          <Link className='deskstopMenuListItem'>Clients</Link>
        </div>
        <button className='deskstopMenuBtn'>
          <img src={ContactIcon} alt='contactIcon' className='deskstopMenuImg' />Contact Me</button>
    </nav>
  )
}

export default NavBar