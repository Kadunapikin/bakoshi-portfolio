import React from 'react';
import '../styles/WorkExperience.css';
import { WORK_EXPERIENCE } from '../utils/data';
import ExperienceCard from './ExperienceCard';


const WorkExperience = () => {
  return (
    <section className='experience-container'>
        <h5>Work Eperience</h5>
        <div className='experience-content'>
            {
                WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard key={item.tittle} details={item} />
                ))
            }
        </div>
    </section>
  )
}

export default WorkExperience