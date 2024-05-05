import React from 'react'
import '../styles/SkillsInfoCard.css';


export const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className='skills-info-card'>
        <h6>{heading}</h6>
        <div className='skills-info-content'>
            {skills.map((item, index) => (
                <React.Fragment key={`skills_${index}`}>
                    <div className='skills-info'>
                        <p>{item.skill}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>
                    <div className='skills-progress-bg'>
                        <div className='skills-progress' style={{ width: item.percentage }} />
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}
