import React from "react"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"

export const query = graphql`
    query getPost($slug: String) {
        post: contentfulPost(slug: {eq: $slug}) {
            title
            published(formatString: "MMMM Do, YYYY", locale: "es-CO")
            text {
                json
            }
        }
    }
`

const BlogTemplate = ({ data }) => {
  const { title, published, text: { json } } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <div className="rich">
            <h3>This is awesome image</h3>
            <img width="400" src={node.data.target.fields.file["es-CO"].url}/>
          </div>
        )
      },
      "embedded-entry-block": (node) => {
        const{name, description} = node.data.target.fields
        const imagenes = node.data.target.fields.images['es-CO']
        const cover = imagenes[0].fields.file['es-CO'].url
        return (
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Este es un tour: {name['es-CO']}</h1>
            {imagenes.map((item, index)=>(
              <img className='m-2' key={index} src={item.fields.file['es-CO'].url} width="400" alt=""/>
            ))}
            <br/>
            <p>
              {description['es-CO']}
            </p>
            <br/>
            <br/>
            <br/>
          </div>
        )
      }
    }
  }
  return (
    <Layout>
      <SEO title={title}/>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Publicado en: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">Ver todos</AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
