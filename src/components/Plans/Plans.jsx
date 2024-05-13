import React from 'react'
import "./plans.css";
import {plansData} from "../../data/plansData";
import { rightArrow, whiteTick } from '../../assets';

const Plans = () => {
  return (
    <section id="plans" className="plans">
        <div className="blur plans-blur-1"></div>
        <div className='blur plans-blur-2'></div>
        <div className="plans-header">
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>

        <div className="plans-container">
            {
                plansData.map((plan, i)=>(
                    <div className='plan-card' key={plan.name}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {
                                plan.features.map((feature, i)=>(
                                    <div className="feature" key={i}>
                                        <img src={whiteTick} alt="white-tick" />
                                        <span>{feature}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            <span>See more benefits</span>
                            <img src={rightArrow} alt="right-arrow" />
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Plans