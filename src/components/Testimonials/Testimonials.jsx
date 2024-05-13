import React, { useState } from 'react'
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { leftArrow, rightArrow } from '../../assets';
import { motion } from "framer-motion"

const Testimonials = () => {

   const [selected, setSelected] = useState(0);
   const tlength = testimonialsData.length;

   const transition = { type: 'spring', duration: 3 }
   return (
      <section id="testimonials" className="testimonials">
         <div className="left-t">
            <span>testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>

            <div className="reviews">
               <motion.span
                  key={selected}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={transition}
               >
                  {testimonialsData[selected].review}
               </motion.span>
               <div>
                  <span>{testimonialsData[selected].name} - </span> {" "}
                  <span>{testimonialsData[selected].status}</span>
               </div>
            </div>
         </div>

         <div className="right-t">
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               transition={{ ...transition, duration: 3 }}
               whileInView={{ opacity: 1, x: 0 }}
            />
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               transition={{ ...transition, duration: 2 }}
               whileInView={{ opacity: 1, x: 0 }}
            />

            <motion.img
               key={selected}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={transition}
               src={testimonialsData[selected].image}
               alt="reviewer" />

            <div className="arrows">
               <img
                  src={leftArrow}
                  alt="left-arrow"
                  onClick={() => (
                     selected === 0
                        ? setSelected(tlength - 1) : setSelected((prev) => prev - 1)
                  )}
               />
               <img
                  src={rightArrow}
                  alt="right-arrow"
                  onClick={() => (
                     selected === tlength - 1
                        ? setSelected(0) : setSelected((prev) => prev + 1)

                  )}
               />
            </div>
         </div>


      </section>
   )
}

export default Testimonials