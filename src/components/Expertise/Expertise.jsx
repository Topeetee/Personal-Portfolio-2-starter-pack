import React from 'react'
import css from './Epertise.module.scss'
import {projectexperience,  WhatDoIHelp} from "../../utils/data"
import {motion} from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'

const Expertise = () => {
  return (
  <motion.section 
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once: false, amount: 0.25}}
  className={` ${css.wrapper}`}>
    <a className='anchor' id="expertise"></a>

    <div className={`paddings ypaddings flexCenter innerWidth ${css.container}`}>
    <div className={css.leftSide}>
        {projectexperience.map((exp, i)=>{
          return(

            <motion.div 
            variants={fadeIn("right","tween",(i+1)*0.2, 1)}
            className={css.exp} key={i}>
              <div className="flexCenter">
                <exp.icon size={25} color="white" style={{background: exp.bg}}/>
              </div>
              <div>
                <span>{exp.name}</span>
                <span className='secondaryText'>{exp.projects} Projects</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div 
      variants={textVariant(0.5)}
      className={css.rightSide}>
       <span className='primaryText'>What can I do?</span>
       { WhatDoIHelp.map((para, i)=>{
        return(
          <span className='secondaerText' key={i} >{para}</span>
        )
       })}

       <div className={`flexCenter ${css.stats}`}>
          <div className={`flexCenter ${css.stat}`}>
            <span className='primaryText'>10+</span>
            <span className='secondaryText'>Projects Completed</span>
          </div>
          <div className={`flexCenter ${css.stat}`}>
            <span className='primaryText'>10+</span>
            <span className='secondaryText'>Happy Clients</span>
          </div>
       </div>
      </motion.div>
    </div>
  </motion.section>
  )
}

export default Expertise;