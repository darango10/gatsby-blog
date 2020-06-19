import React from "react"
import styles from "../../css/about.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
    query aboutImage {
        aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
            childImageSharp {
                fluid(maxWidth:600){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = () => {

  const { aboutImage } = useStaticQuery(getAbout);

  return (
    <section className={styles.about}>
      <Title titulo={"Acerca"} subtitulo={"de"}/>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about company"/>
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
