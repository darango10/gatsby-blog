import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import ToursComponent from "../components/Tours/Tours"
import SEO from "../components/SEO"

export const query = graphql`
    query {
        defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
            childImageSharp {
                fluid(quality:90,maxWidth:4160){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`


const Tours = ({ data }) => {
  return (
    <Layout>
      <SEO title={'Tours'}/>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>

      </StyledHero>
      <ToursComponent/>
    </Layout>
  )
}

export default Tours
