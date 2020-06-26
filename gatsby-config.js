/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}` // or '.env'
})

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "BackRoads",
        description: "Explore awesome worldwide tours & discover what makes each of them unique." +
            "Forget your daily routine & say yes to adventure",
        author: "@daniel",
        twitterUsername: "@darango1093",
        image: "/defaultBcg.jpeg",
        siteUrl: "https://gatsby-blog123.netlify.app"
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-playground`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://gatsby-blog123.netlify.app',
                sitemap: 'https://gatsby-blog123.netlify.app/sitemap.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        {
            resolve: `gatsby-plugin-tawk`,
            options: {
                tawkId: process.env.TAWK_ID,
                // get this from the tawk script widget
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ]
}
