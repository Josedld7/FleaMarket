import React, { useEffect, useState } from "react";
import { shopingCar } from '../../store/actions/index.js';
import { useDispatch } from "react-redux";
import styles from './Card.module.css'

const Card = (props) => {

  const [prices, setPrices] = useState(JSON.parse(sessionStorage.getItem("prices")))

  const dispatch = useDispatch()
  useEffect(() => dispatch(shopingCar("")), []);

  function deletToCar() {
    const copyPrices = JSON.parse(sessionStorage.getItem("prices"))
    copyPrices.splice(props.index, 1)
    sessionStorage.setItem("prices", JSON.stringify(copyPrices))
    setPrices(JSON.parse(sessionStorage.getItem("prices")))
    dispatch(shopingCar("DEL", props.id))
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

        <img src={props.image} alt="not found" height="170px" width="230px" />
        <div>
          <h2> {props.title}</h2>
          <h4>$ {props.price} und </h4>
          <button style={{ border: "0px" }}onClick={deletToCar}>Delete</button>

        </div>


      </div>

      <div className={styles.block__shopingcontendorcinco}>
        
        <button style={{ border: "0px", cursor: "pointer" }} onClick={less}>-</button>
        <button style={{ border: "0px" }} >{prices[props.index] / props.price}</button>
        <button style={{ border: "0px", cursor: "pointer" }} onClick={plus}>+</button>

      </div>


      <h3 className={styles.block__shopingprecio}>${prices[props.index]}</h3>


    </div>

  )
}

export default Card;