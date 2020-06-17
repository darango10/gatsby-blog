import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from "../components/Banner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title={"oops! 404"}
                info={"Pagina no encontrada"}
        ><AniLink fade to={'/'} className='btn-white'>Ir a inicio</AniLink></Banner>
      </header>
    </Layout>
  )
}

export default error
