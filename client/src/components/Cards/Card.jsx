import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import car from '../../assets/carrito2.png'
const Card = (props) => {



  return (
    <div className={styles.block__card}>
      <Link to={{ pathname: `/detail/${props.id}`}}>
        <img
          className={styles.block__card_img}
          src={props.image}
          alt="not found"
        />
      </Link>
      <div className={styles.block__details}>
        <div className={styles.block__name_precio}>
          <h3 className={styles.block__card_name}>{props.title}</h3>
          <div className={styles.block__card_precio}>${props.price}</div>
        </div>
        <div className={styles.block__description}>
          <Link to="/shoping">
            <p>
              <img className={styles.icon_car} src={car} />{' '}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card
