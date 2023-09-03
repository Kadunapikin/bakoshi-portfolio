import React from 'react';
import '../styles/Works.css';
import capstone from "../assets/capstone.JPG"
import etchASketch from '../assets/etchASketch.JPG';
import portfolio from '../assets/portfolio.JPG';
import rps from '../assets/rps.JPG';
import reactPortfolio from '../assets/reactPortfolio.JPG';
import githubProfile from '../assets/githubProfile.JPG';

function Works() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span worksDesc>I take pride in paying attention to the smallest detail and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
          <img src={capstone} alt='' className='worksImg' />
          <img src={etchASketch} alt='' className='worksImg' />
          <img src={portfolio} alt='' className='worksImg' />
          <img src={rps} alt='' className='worksImg' />
          <img src={reactPortfolio} alt='' className='worksImg' />
          <img src={githubProfile} alt='' className='worksImg' />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works