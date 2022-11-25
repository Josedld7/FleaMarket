import React, { useEffect, useState } from "react";
import { shopingCar } from '../../store/actions/index.js';
import { useDispatch } from "react-redux";
import styles from './Card.module.css'

const Card = (props) => {

  const [prices, setPrices] = useState(JSON.parse(sessionStorage.getItem("prices")))

  const dispatch = useDispatch()

  function deletToCar() {
    dispatch(shopingCar("DEL", props.id))
    const copyPrices = JSON.parse(sessionStorage.getItem("prices"))
    copyPrices.splice(props.index, 1)
    sessionStorage.setItem("prices", JSON.stringify(copyPrices))
    setPrices(JSON.parse(sessionStorage.getItem("prices")))
  }

  function plus() {
    if ((prices[props.index] / props.price) < props.stock) {
      const copyPrices = JSON.parse(sessionStorage.getItem("prices"))
      copyPrices[props.index] = copyPrices[props.index] + props.price
      sessionStorage.setItem("prices", JSON.stringify(copyPrices))
      setPrices(JSON.parse(sessionStorage.getItem("prices")))
    }
  }

  function less() {
    if ((prices[props.index] / props.price) > 1) {
      const copyPrices = JSON.parse(sessionStorage.getItem("prices"))
      copyPrices[props.index] = copyPrices[props.index] - props.price
      sessionStorage.setItem("prices", JSON.stringify(copyPrices))
      setPrices(JSON.parse(sessionStorage.getItem("prices")))
    }
  }

  return (

    <div className={styles.block__shopingcontendortres}>

      <div className={styles.block__shopingcontendorcuatro}>

        <img src={props.image} alt="not found" height="170px" />
        <div>
          <h2> {props.title}</h2>
          <button styles={{ outline: `none` }} onClick={deletToCar}>Delete</button>

        </div>


      </div>

      <div className={styles.block__shopingcontendorcinco}>
        <h4>$ {props.price} und </h4>
        <button styles={{ outline: "none" }} onClick={less}>-</button>
        <button styles={{ outline: "none" }} >{prices[props.index] / props.price}</button>
        <button styles={{ outline: "none" }} onClick={plus}>+</button>

      </div>


      <h3 className={styles.block__shopingprecio}>${prices[props.index]}</h3>


    </div>

  )
}

export default Card;