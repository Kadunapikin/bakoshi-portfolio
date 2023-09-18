import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import fbIcon from '../assets/FacebookIcon.JPG';
import igIcon from '../assets/GithubIcon.JPG';
import twitterIcon from '../assets/InstagramIcon.JPG';
import linkdinIcon from '../assets/LinkdinIcon.JPG';
import githubIcon from '../assets/TwitterIcon.JPG';




function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sewv1wn', 'template_pbg7qwd', form.current, 'MQaxQbrbfZJ0Ht2fG')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Kindly fill out the form bellow to discuss any job opportunity</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea className='msg' name='message'rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                  <a href='https://github.com/Kadunapikin'><img src={githubIcon} alt='linkinIcon' className='link' /></a>
                  <a href='https://www.linkedin.com/in/kadunapikin/'><img src={linkdinIcon} alt='githubIcon' className='link' /></a>
                  <a href='https://www.facebook.com/ibakoshi?mibextid=ZbWKwL'><img src={twitterIcon} alt='twitterIcon' className='link' /></a>
                  <a href='https://twitter.com/Kadunapikin?t=BkjbDzGQlfmxYgeaPyGAZA&s=09'><img src={igIcon} alt='igIcon' className='link' /></a>
                  <a href='https://instagram.com/kadunapikin?igshid=ZGUzMzM3NWJiOQ=='><img src={fbIcon} alt='FacebookIcon' className='link' /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact