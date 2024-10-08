import React from 'react'
import '../styles/Intro.css';
import bg from '../assets/grey-hub.png';
import { Link } from 'react-scroll';
import hireme from '../assets/hireme.jpg';
import htmlIcon from '../assets/html-5-svgrepo-com.svg';
import cssIcon from '../assets/css-3-svgrepo-com.svg';
import javaScriptIcon from '../assets/js-svgrepo-com.svg';
import reactIcon from '../assets/react-svgrepo-com.svg';



function Intro() {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
  }
  return (
    <section id='intro'>
      <div className='introContent'>
        {/* <span className='hello'>Hello,</span> */}
        <span className='introText'>Building <span className='introName'>Digital Experience</span> <br />That Inspire</span>
        <p className='introPara'>Passionate FrontEnd Developer | Transforming Ideas into<br/> Seamless and Visually Stunning Web Solutions.</p>
        <Link onClick={handleClick}><button className='btn'><img src={hireme} alt='Hire me' className='btnImg' />Hire Me</button></Link>
      </div>
      <div className='hero-img'>
        <div>
          <img src={bg} alt='Profile' className='bg' />
        </div>
        <div>
          <div className='tech-icon'>
            <img src={htmlIcon} alt='htmlIcon' /> 
          </div>
          <div className='tech-icon'>
            <img src={cssIcon} alt='cssIcon' /> 
          </div>
          <div className='tech-icon'>
            <img src={javaScriptIcon} alt='javaScriptIcon' /> 
          </div>
          <div className='tech-icon'>
            <img src={reactIcon} alt='reactIcon' /> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro