import React from 'react'
import "./reasons.css";
import { tick, image1, image2, image3, image4, nike, adidas, nb,  } from '../../assets';

const Reasons = () => {
  return (
    <section id="reasons" className="reasons">
        <div className="reason-img">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
        </div>

        <div className="reason-text">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>Why</span> <span>choose us?</span>
            </div>

            <div className='reasons-why'>
                <div>
                    <img src={tick} alt="tick" />
                    <span>over 140+ expert coaches</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>reliable partners</span>
                </div>
            </div>

            <div className="partners">
                <span>our partners</span>
                <div>
                    <img src={nb} alt="nb" />
                    <img src={adidas} alt="adidas" />
                    <img src={nike} alt="nike" />
                </div>
            </div>
        </div>

        
    </section>
  )
}

export default Reasons