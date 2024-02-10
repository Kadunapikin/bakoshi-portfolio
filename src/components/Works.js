import React from 'react';
import '../styles/Works.css';
import capstone from "../assets/capstone.JPG"
import etchASketch from '../assets/etchASketch.JPG';
import portfolio from '../assets/portfolio.JPG';
import rps from '../assets/rps.JPG';
import reactPortfolio from '../assets/reactPortfolio.JPG';
import responsiveNavBar from '../assets/responsiveNavBar.JPG';

function Works() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest detail and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
          <a href='https://phildeoner.github.io/Capstone-Project/'><img src={capstone} alt='Capstone Project' className='worksImg' /></a>
          <a href='https://kadunapikin.github.io/etch_a_sketch/'><img src={etchASketch} alt='Etch A Sketch Project' className='worksImg' /></a>
          <a href='https://kadunapikin.github.io/portfolio/'><img src={portfolio} alt='My HTML, CSS and JavaScript portfolio' className='worksImg' /></a>
          <a href='https://kadunapikin.github.io/RockPaperScissors/'><img src={rps} alt='Rock Paper and Scissors game' className='worksImg' /></a>
          <a href='https://kadunapikin.github.io/my-react-portfolio/'><img src={reactPortfolio} alt='My react Portfolio' className='worksImg' /></a>
          <a href='https://kadunapikin.github.io/Responsive-NavBar/'><img src={responsiveNavBar} alt='Responsive NavBar Page' className='worksImg' /></a>
        </div>
        <a href='https://github.com/Kadunapikin'><button className='workBtn'>See More</button></a>
    </section>
  )
}

export default Works