import React from 'react';
import '../styles/Skills.css';
import htmlIcon from '../assets/html-5-svgrepo-com.svg';
import cssIcon from '../assets/css-3-svgrepo-com.svg';
import javaScriptIcon from '../assets/js-svgrepo-com.svg';
import reactIcon from '../assets/react-svgrepo-com.svg';
import githubIcon from '../assets/github-svgrepo-com.svg';
import { SKILLS } from '../utils/data';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <section className='skills-container' id='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
            <div className='skills'>
                {SKILLS.map((item) => (
                    <SkillCard 
                    key={item.tittle}
                    iconUrl={item.icon}
                    tittle={item.tittle}
                    />
                ))}
            </div>

            <div className='skills-info'></div>
        </div>


        {/* <span className='skillTitle'>Skills</span>
        <span className='skillDesc'>I am a skilled and passionate Web developer with experience in creating visually appealing and user friendly website. I am proficient in HTML, CSS, JavaScript and ReactJs.</span> */}
        <div className='skillBars'>
            {/* <div className='skillBar'>
                <img src={htmlIcon} alt='htmlIcon' />
                <div className='skillBarText'>
                    <h2>HTML</h2>
                    <p>HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={cssIcon} alt='cssIcon' />
                <div className='skillBarText'>
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={javaScriptIcon} alt='javaScriptIcon' />
                <div className='skillBarText'>
                    <h2>JavaScript</h2>
                    <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={reactIcon} alt='reactIcon' />
                <div className='skillBarText'>
                    <h2>React Js</h2>
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components.</p>
                </div>
            </div> */}
            <div className='hero-skills'>
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
                <div className='tech-icon'>
                    <img src={githubIcon} alt='reactIcon' /> 
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills