import { useDispatch } from 'react-redux'
import loadings from "../../assets/loading.gif"
import Card from './Card.jsx'
import styles from './Cards.module.css'
import { loadProduct } from '../../store/actions/index.js'
import { useEffect, useContext } from 'react'
import ProductsContext from "../../context/products/productsContext.js";

const Cards = () => {

  const { products, error, loading } = useContext(ProductsContext);

  console.log(error)
  
  const dispatch = useDispatch()

  useEffect(() => { dispatch(loadProduct()) }, [])

  const productCard = products.filterProducts;

   return (
    <div className={styles.contenedor_cardscero}>
      <div className={styles.contenedor_cards}>
        {loading ? (<img src={loadings} alt="Loading..." />) : (error.length > 0 ? (<p>{error}</p>) : (productCard && productCard.map((e, i) => {
          return (
            <Card
              key={i}
              title={e.title}
              image={e.image.secure_url? e.image.secure_url : e.image}
              price={e.price}
              id={e._id}
              allProduct={e}
            />
          )
        })))}
      </div>
    </div>
  )
}
export default Cards