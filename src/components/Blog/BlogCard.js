import React from "react"
import styles from "../../css/blog-card.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {

  const { slug, title, image, published } = blog

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} className={styles.img} alt={'single post'}/>
        <AniLink fade className={styles.link} to={`blog/${slug}`}>
          Leer mas
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard