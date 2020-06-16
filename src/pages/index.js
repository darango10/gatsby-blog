import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"


const Index = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner title={"Continua explorando"} info={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
        "          Accusantium ad animi aperiam cum dignissimos."}
        ><Link to={"tours"} className='btn-white'>Explorar tours</Link></Banner>
      </SimpleHero>
      <About/>
      <Services/>
    </Layout>
  )
}

export default Index
