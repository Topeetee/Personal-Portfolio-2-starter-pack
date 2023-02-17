import React from 'react'
import css from "./Footer.module.scss"
import { motion } from "framer-motion"
import { footerVariants, staggerContainer } from '../../utils/motion'

const Footer = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={` paddings  ${css.wrapper}`}>
            <motion.div
                variants={footerVariants}
                className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>

                    <span className="primaryText">
                        Let's make something <br /> amazing together
                    </span>
                    <span className="primaryText">
                        Visit my   <a href='https://github.com/Topeetee/'>Github</a>
                    </span>
                </div>
                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>34 Alhaji Monsuru, ijegun, Lagos, Nigeria</p>
                    </div>

                    <div className={css.menu}>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Experiences</li>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Footer