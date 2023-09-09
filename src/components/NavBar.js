import React, { useState } from 'react';
import '../styles/NavBar.css';
import logo from '../assets/logo.JPG';
import { Link } from 'react-scroll';
import ContactIcon from '../assets/contact.png';
import MenuIcon from '../assets/MenuIcon.JPG';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleChange = () => {
    setShowMenu(false);
  }

  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
  }
  return (
    <nav className='navBar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='deskstopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='deskstopMenuListItem' onClick={handleChange}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='deskstopMenuListItem' onClick={handleChange}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='deskstopMenuListItem' onClick={handleChange}>Portfolio</Link>
        </div>
        <button className='deskstopMenuBtn' onClick={handleClick}>
          <img src={ContactIcon} alt='contactIcon' className='deskstopMenuImg' />Contact Me</button>

          <img src={MenuIcon} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>Portfolio</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>Contact</Link>
        </div>

    </nav>
  )
}

export default NavBar