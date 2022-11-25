import React, { useEffect, useState } from "react";
import { shopingCar } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Payment from "../../components/Payment/Payment.jsx";
import HeadPage from "../../components/HeadPage/HeadPage";
import styles from './ShoppingCard.module.css'

const ShopingCard = () => {
  const dispatch = useDispatch();

  const carrito = useSelector((state) => state.shoping);
  console.log("carrito:", carrito);

  function reset() {
    let resp = window.confirm("¿Esta seguro de querer vaciar el carrito?")
    if (resp === true){
      dispatch(shopingCar("REST"));
      setSuiche(false)
    }
  }

  console.log("prices", JSON.parse(sessionStorage.getItem("prices")))

  const p = JSON.parse(sessionStorage.getItem("prices"))
  const subTot = p.reduce((a, b) => a + b, 0)
  console.log("pagar:", subTot);

  const [suiche, setSuiche] = useState(false);
  function pago() {
    setSuiche(true);
  }

  return (
    <div>
      <HeadPage />
      <div className={styles.block__shoping}>
        <div className={styles.block__shopingcontenedor}>
          <div className={styles.block__shopingcontenedoruno}>
            <h3>Carrito de compras</h3>
            
          </div>
          <div className={styles.block__profile_contendordosdiv}  ></div>

          <div className={styles.block__shopingcontenedordos}>
            {carrito.length === 0 && <p>Sin Productos</p>}
              {carrito &&
                carrito.map((e, i) => {
                  return  (
                    <div className={styles.block__shopingcontendortres} key={i}>
                      
                      <Card
                        index={i}
                        id={e._id}
                        title={e.title}
                        image={e.image}
                        price={e.price}
                        stock={e.stock}
                      />
                      
                    </div>
                  );
                })}

              
              
              
              
              
              {suiche && <Payment price={subTot} />}

          </div>
          <div className={styles.block__profile_contendordosdiv}  ></div>
          

          <div className={styles.block__shopingcontenedorseis}>
            {carrito.length > 0 && <button onClick={reset}>Reset carrito</button>}
            <button  onClick={pago}>PAGAR</button>

          </div>
          
        </div>
        
          
      </div>
      
    </div>
  );
};

export default ShopingCard;
