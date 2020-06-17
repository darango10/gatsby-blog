import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/all"
import links from "../constants/links"
import social from "../constants/social-icons"
import logo from "../images/logo.svg"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Navbar = () => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Backroads logo"/>
          <button
            type="button"
            className={styles.logoBtn}
            onClick={toggleNav}
          ><FaAlignRight className={styles.logoIcon}/></button>
        </div>

        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => (
            <li key={index}><AniLink fade to={item.path}>{item.text}</AniLink></li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >{item.icon}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
