import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title={"oops! 404"}
                info={"Pagina no encontrada"}
        ><Link to={'/'} className='btn-white'>Ir a inicio</Link></Banner>
      </header>
    </Layout>
  )
}

export default error
