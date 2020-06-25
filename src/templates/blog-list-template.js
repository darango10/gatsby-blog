import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import Layout from "../components/Layout"
import Title from "../components/Title"
import BlogCard from "../components/Blog/BlogCard"
import { FaArrowLeft, FaArrowRight } from "react-icons/all"
import SEO from "../components/SEO"

export const query = graphql`
    query PostPerPage($skip: Int, $limit: Int) {
        posts: allContentfulPost(limit: $limit, skip: $skip, sort: {fields: published, order: DESC}) {
            edges {
                node {
                    slug
                    title
                    id: contentful_id
                    published(formatString: "MMMMM Do, YYYY", locale: "es-CO")
                    image {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

const BlogListTemplate = (props) => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext
  console.log(props)
  return (
    <Layout>
      <SEO title={'Blogs'}/>
      <section className={styles.blog}>
        <Title titulo={"Ultimos"} subtitulo={"Posts"}/>
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node}/>
          ))}
        </div>
        <section className={styles.links}>
          <AniLink className={styles.link} fade to={"/blogs"}>Primera</AniLink>
          <AniLink className={styles.link} fade to={`/blogs/${currentPage <= 2 ? "" : currentPage - 1}`}><FaArrowLeft/></AniLink>
          {Array.from({ length: numPages }, (_, i) => (
            <AniLink key={i} fade to={`/blogs/${i === 0 ? "" : i + 1}`}
                     className={i + 1 === currentPage
                       ? `${styles.link} ${styles.active}`
                       : `${styles.link}`}
            >{i + 1}</AniLink>
          ))}
          <AniLink className={styles.link} fade
                   to={`/blogs/${currentPage === numPages ? numPages : currentPage + 1}`}><FaArrowRight/></AniLink>
          <AniLink className={styles.link} fade to={`/blogs/${numPages}`}>Última</AniLink>
        </section>
      </section>
    </Layout>
  )
}

export default BlogListTemplate
