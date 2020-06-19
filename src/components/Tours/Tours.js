import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const ToursComponent = () => {

  const query = useStaticQuery(graphql`
      {
          tours: allContentfulTours {
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

  const toursQuery = (query.tours.edges)
console.log(toursQuery)
  return (
    <div>
      <TourList tours={toursQuery}/>
    </div>
  )
}

export default ToursComponent
