import React from "react"
import styles from "../../css/about.module.css"
import Title from "../Title"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title titulo={"Acerca"} subtitulo={"de"}/>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company"/>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explora la diferencia</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis quaerat quo sed? Alias aliquam,
            assumenda dicta dolor ex ipsum laboriosam magnam necessitatibus nulla odio omnis, quibusdam quisquam vero
            vitae.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis quaerat quo sed? Alias aliquam,
            assumenda dicta dolor ex ipsum laboriosam magnam necessitatibus nulla odio omnis, quibusdam quisquam vero
            vitae.</p>
          <button type="button" className='btn btn-primary'>Leer mas</button>
        </article>
      </div>
    </section>
  )
}

export default About
