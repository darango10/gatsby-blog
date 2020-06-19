import React, { useState } from "react"
import styles from "../../css/items.module.css"
import Title from "../Title"
import Tour from "./Tour"

const TourList = ({ tours }) => {

const[state, setState] = useState({
  tours: tours,
  sorted_tours:tours
})

  return (
    <section className={styles.tours}>
      <Title titulo={"Nuestros"} subtitulo={"Tours"}/>
      <div className={styles.center}>
        {state.sorted_tours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node}/>
        ))}
      </div>
    </section>
  )
}

export default TourList
