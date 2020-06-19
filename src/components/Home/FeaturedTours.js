import React from "react"
import Tour from "../Tours/Tour"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"

const FeaturedTours = () => {

  const getTours = useStaticQuery(graphql`
      {
          featuredTours: allContentfulTours(filter: {feature: {eq: true}}) {
              edges {
                  node {
                      name
                      price
                      slug
                      country
                      contentful_id
                      days
                      images {
                          fluid {
                              ...GatsbyContentfulFluid_tracedSVG
                          }
                      }
                  }
              }
          }
      }
  `)

  const tours = (getTours.featuredTours.edges)
  console.log(tours)

  return (
    <section className={styles.tours}>
      <Title titulo={"Tours"} subtitulo={"Destacados"}/>
      <div className={styles.center}>
        {tours.map(({node}) => (
          <Tour key={node.contentful_id} tour={node}/>
        ))}

      </div>

      <AniLink fade to={"/tours"} className='btn-primary'>Ver todos</AniLink>
    </section>
  )
}

export default FeaturedTours
