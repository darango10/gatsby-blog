import React from "react"
import BlogCard from "./BlogCard"
import styles from "../../css/blog.module.css"
import { graphql,useStaticQuery } from "gatsby"
import Title from "../Title"

const getPosts = graphql`
    {
        posts:allContentfulPost(sort: {fields: createdAt, order: DESC}) {
            edges {
                node {
                    title
                    published(fromNow: true, locale: "es-CO")
                    slug
                    contentful_id
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

const BlogList = () => {
  const{posts} =useStaticQuery(getPosts)
  console.log(posts)
  return (
    <section className={styles.blog}>
      <Title titulo={'Blog'} subtitulo={'Posts'}/>
      <div className={styles.center}>
        {posts.edges.map(({node}) =>(
          <BlogCard key={node.contentful_id} blog={node}/>
        ))}
      </div>
    </section>
  )
}

export default BlogList
