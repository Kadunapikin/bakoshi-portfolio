import React from 'react'
import '../styles/Intro.css';
import bg from '../assets/profile1.JPG';
import { Link } from 'react-scroll';
import hireme from '../assets/hireme.jpg';


function Intro() {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
  }
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Bakoshi</span> <br />Front End Web Developer</span>
        <p className='introPara'>I'm a front end web developer, detail-oriented team player<br/> with strong passion for learning and Creating.</p>
        <Link onClick={handleClick}><button className='btn'><img src={hireme} alt='Hire me' className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro