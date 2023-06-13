import React from 'react'
import css from './Hero.module.scss'
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion"

const Hero = () => {
  return (
    <section className={`paddings  ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>

        <div className={`${css.upperElemets}`}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className='primaryText'>
            Hey There, <br /> I'm Temitope<p>(AkpariJS).</p>
          </motion.span >
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            I am a Fullstack Developer, <br />
            i Develop websites.
          </motion.span>
        </div>

        <motion.div className={css.person}
          variants={fadeIn("up", "tween", 0.3, 1)}>
          <motion.img variants={slideIn("up", "tween", 0.5, 1)} src="/portt-removebg-preview.png" alt="topeetee image" />
        </motion.div>

        <a className={css.email} href="mailto:temitopeakinwekomi28@gmail.com">temitopeakinwekomi28@gmail.com</a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">1</div>
            <div className='secondaryText'>
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}>
            <img src='./certificate.png' alt='certificate-image' />
            <span>CERTIFIEED PROFESSIONAL</span>
            <span>FULLSTACK DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;