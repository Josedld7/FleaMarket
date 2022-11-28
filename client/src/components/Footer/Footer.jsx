import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer_contenedor}>
      <div className={styles.footer_general_sections}>
        <section className={styles.container_sections}>
          <section className={styles.sub_sections}>
            <div>
              <h5>Paga con targeta o efectivo</h5>
              <p>
                Con Flea Market pago, contamos con exelentes metodos de pago
                virtuales. !Siempre Seguro!
              </p>
            </div>
          </section>

          <section className={styles.sub_sections}>
            <div>
              <h5>Seguridad de principio a fin </h5>
              <p>
                 En FleaMarket, no hay nada que no
                puedas hacer, porque estás siempre protegido.
              </p>
            </div>
          </section>
          <section className={styles.sub_sections}>
            <div>
              <h5> Mi cuenta</h5>
              <p>Vender</p>
              <p>Ingresar</p>
            </div>
          </section>
        </section>

        <section className={styles.sub_sections}>
          <div className={styles.section_terminos}>
            <h5>Terminos y condiciones - </h5>
            <h5>  Flea Market</h5>
          </div>
          <div>
            <h5>Copyrigth@ 2022 FleaMarket</h5>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
