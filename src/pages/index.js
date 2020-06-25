import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedTours from "../components/Home/FeaturedTours"
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


export default ({data}) => {
  return (
    <Layout>
      <SEO title='Home'/>
      <StyledHero home={"true"} img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title={"Continua explorando"} info={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
        "          Accusantium ad animi aperiam cum dignissimos."}
        ><AniLink fade to={"tours"} className='btn-white'>Explorar tours</AniLink></Banner>
      </StyledHero>
      <About/>
      <Services/>
      <FeaturedTours/>
    </Layout>
  )
}



