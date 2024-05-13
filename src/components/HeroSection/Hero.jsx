import React from 'react'
import "./hero.css";
import Header from '../Header/Header';
import { heart, calories, heroImg, heroImgBack } from '../../assets';
import {motion} from "framer-motion"

const Hero = () => {
    const transition = {type: 'spring', duration:3}
  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            
            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                />
                <span>the best fitness club in town</span>
            </div>

            {/* hero text */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>shape</span> {" "}
                    <span>your</span>
                </div>
                <div><span>Ideal body</span></div>
                <div>
                    <span>
                    In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                </div>
            </div>

            {/* figures */}

            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>

                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>

                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* hero buttons */}
            <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn more</button>
            </div>

        </div>

        {/* right side of hero section */}
        <div className="right-h">
            <button className="btn">Join now</button>
            <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={heart} alt="heart" />
                <span>Heart rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={heroImg} alt="hero-img" className='hero-img'/>
            <motion.img 
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={heroImgBack} 
            alt="hero-back" 
            className='hero-back-img' />

            <motion.div 
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
            className="calories">
                <img src={calories} alt="calories" />
                <div>
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Hero