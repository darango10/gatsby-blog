import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/all"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const query = graphql`
    query ($slug:String!) {
        tour:contentfulTours(slug: {eq:$slug}) {
            name
            price
            country
            days
            start(formatString: "ddd MMMM Do, YYYY", locale: "es-CO")
            description {
                description
            }
            journey {
                day
                info
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid_withWebp

                }
            }
        }
    }
`

const TourTemplate = ({ data }) => {
  const { name, price, country, days, description: { description }, images, start, journey } = data.tour
  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid}>
      </StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => (
              <Img key={index}
                   fluid={item.fluid}
                   alt='single tour'
                   className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}/>
              desde ${price}
            </p>
            <p>
              <FaMap className={styles.icon}/>
              {country}
            </p>
          </div>
          <h4>Comienza en: {start}</h4>
          <h4>Duracion: {days} dias</h4>
          <p className={styles.desc}>
            {description}
          </p>
          <h2>Horario</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info}/>
            ))}
          </div>
          <AniLink fade to={'/tours'} className='btn-primary'>Regresar a los tours</AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default TourTemplate
