import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <div>
      <section className={styles.contact}>
        <Title titulo={'Contacta con'} subtitulo={'Nosotros'}/>
        <div className={styles.center}>
          <form className={styles.form} method="post"
                action="https://formspree.io/arangomonsalve.daniel@gmail.com"
          >
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name"
                     id="name" className={styles.formControl}
                     placeholder='John Smith'
                     required
              />

              <label htmlFor="email">Email</label>
              <input type="email" name="email"
                     id="email" className={styles.formControl}
                     placeholder='email@example.com'
                     required
              />

              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="10"
                        className={styles.formControl} placeholder="Hello there!" required
              />
            </div>
            <div>
              <input type="submit" value="Enviar Mensaje" className={styles.submit}/>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
