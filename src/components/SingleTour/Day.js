import React, { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/all"
import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {

  const [display, setDisplay] = useState(false)

  const toogleInfo = () => {
    setDisplay(display => !display)
  }

  return (
    <article className={styles.day}>
      <h4>
        {day}
        {display
          ?
          <button className={styles.btn} onClick={toogleInfo}>
            <FaAngleUp/>
          </button>
          :
          <button className={styles.btn} onClick={toogleInfo}>
            <FaAngleDown/>
          </button>
        }

      </h4>
      <p className={display?`${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>{info}</p>
    </article>
  )
}

export default Day
