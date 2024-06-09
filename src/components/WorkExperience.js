import React, { useRef } from 'react';
import '../styles/WorkExperience.css';
import { WORK_EXPERIENCE } from '../utils/data';
import ExperienceCard from './ExperienceCard';
import Slider from 'react-slick';
import chevronLeft from '../assets/chevron_left.svg';
import chevronRight from '../assets/chevron_right.svg';


const WorkExperience = () => {

  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slightRight = () => {
    sliderRef.current.slickNext();
  }

  const slightLeft = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <section className='experience-container'>
        <h5>Work Eperience</h5>
        <div className='experience-content'>
          <div className='arrow-right' onClick={slightRight}>
            <img src={chevronRight} alt='chevron-right' />
          </div>
          <div className='arrow-left' onClick={slightLeft}>
            <img src={chevronLeft} alt='chevron-left' />
          </div>
          <Slider ref={sliderRef} {...settings}>
            {
                WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard key={item.tittle} details={item} />
                ))
            }
          </Slider>
        </div>
    </section>
  )
}

export default WorkExperience