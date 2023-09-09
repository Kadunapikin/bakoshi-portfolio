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
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='deskstopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='deskstopMenuListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='deskstopMenuListItem'>Portfolio</Link>
        </div>
        <button className='deskstopMenuBtn'>
          <img src={ContactIcon} alt='contactIcon' className='deskstopMenuImg' />Contact Me</button>
    </nav>
  )
}

export default NavBar