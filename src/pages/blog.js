import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import BlogList from "../components/Blog/BlogList"

export const query = graphql`
    query {
        defaultBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
            childImageSharp {
                fluid(quality:90,maxWidth:4160){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`


const Blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>

      </StyledHero>
      <BlogList/>
    </Layout>
  )
}

export default Blog
