import React from 'react';
import "./programs.css";
import {programsData} from "../../data/programsData";
import { rightArrow } from '../../assets';

const Programs = () => {
  return (
    <section id="programs" className='programs'>
        <div className="programs-title">
            <span className="stroke-text">explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-categories">
            {
                programsData.map((program)=>(
                    <div key={program.heading} className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>

                        <div className="join-btn-container">
                            <span>Join now</span>
                            <img src={rightArrow} alt="right-arrow" />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Programs