import React from 'react';
import '../styles/Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Kindly fill out the form bellow to discuss any job opportunity</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message'rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                  <a href='https://github.com/Kadunapikin'><GithubIcon /></a>
                  <a href='https://www.linkedin.com/in/kadunapikin/'><LinkedInIcon /></a>
                  <a href='https://www.facebook.com/ibakoshi?mibextid=ZbWKwL'><FacebookIcon /></a>
                  <a href='https://twitter.com/Kadunapikin?t=BkjbDzGQlfmxYgeaPyGAZA&s=09'><TwitterIcon /></a>
                  <a href='https://instagram.com/kadunapikin?igshid=ZGUzMzM3NWJiOQ=='><InstagramIcon /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact