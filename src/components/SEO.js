import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
    {
        site {
            siteMetadata {
                siteTitle:title
                siteDescription:description
                siteAuthor:author
                siteURL
                image
                twitterUsername
            }
        }
    }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const { siteDescription, siteTitle, siteURL, image, twitterUsername } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "es" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription}/>
      <meta name="image" content={image}/>
      {/*Twitter Card*/}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content={twitterUsername}/>
      <meta name="twitter:title" content={siteTitle}/>
      <meta name="twitter:description" content={siteDescription}/>
      <meta name="twitter:image" content={`${siteURL}${image}`}/>
    </Helmet>
  )
}

export default SEO
