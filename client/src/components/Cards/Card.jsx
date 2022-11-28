import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import car from '../../assets/carrito3.png'
import { shopingCar } from '../../store/actions/index.js'

const Card = (props) => {
  const dispatch = useDispatch()

  function addToCar() {
    console.log('In SHOPPING CAR')
    dispatch(shopingCar('ADD', props.allProduct))
  }

  return (
    <div className={styles.block__card}>
      <Link to={{ pathname: `/detail/${props.id}` }}>
        <img
          className={styles.block__card_img}
          src={props.image}
          alt="not found"
        />
      </Link>
      <div className={styles.block__details}>
        <div>
          <a className={styles.block__card_name}>{props.title}</a>
        </div>
        <div className={styles.price_and_car}>
          <div className={styles.block__name_precio}>
            <a className={styles.block__card_precio}>${props.price}</a>
          </div>
          <div>
            <button
              className={styles.icon_car_container}
              type="button"
              onClick={addToCar}
              style={{ cursor: 'pointer' }} >

              <img className={styles.icon_car} src={car} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
