import React from 'react';
import Layout from "../components/Layout";
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"

export const query = graphql`
    query {
        defaultBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
            childImageSharp {
                fluid(quality:90,maxWidth:4160){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`


const Contacto = ({data}) => {
    return (
        <Layout>
          <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
          </StyledHero>
          <Contact/>
        </Layout>
    );
};

export default Contacto;
