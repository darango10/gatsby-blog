import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../../images/connectBcg.jpeg"
import Img from "gatsby-image"


const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article{
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic{
    width: 100%;
  }
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  .fluid{
  width: 200px;
  }
`

const getImages = graphql`
    {
        fixed: file(relativePath: {eq: "defaultBcg.jpeg"}) {
            childImageSharp {
                fixed(width: 150, height: 150, grayscale: true) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid: file(relativePath: {eq: "blogBcg.jpeg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} className="basic"/>
      </article>
      <article>
        <h3>Fixed Image/Blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed}/>
      </article>
      <article>
        <h3>Fluid Image/SVG</h3>
        <Img fluid={data.fluid.childImageSharp.fluid}/>
        <div className='fluid'>
          <Img fluid={data.fluid.childImageSharp.fluid}/>
        </div>

      </article>
    </Wrapper>
  )
}

export default Images
