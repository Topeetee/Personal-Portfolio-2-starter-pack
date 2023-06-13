import React, { useState } from 'react'
import css from "./Header.module.scss"
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi"
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from "../../hooks/useOutsideAlerter"
import { useRef } from 'react'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef(null);

  useOutsideAlerter({menuRef,setMenuOpened,})
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}>

      <div className={` flexCenter innerWidth ${css.container}`}>
        <div className={`${css.name}`}>
          TopeeTee
        </div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li><a href="#expertise">Servives</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+123 456 789</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div className={css.menuIcon} 
          onClick={() => setMenuOpened((prev) => !prev)
          }>
          <BiMenuAltRight size={"40px"} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header