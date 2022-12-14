import Cards from './../../components/Cards/Cards.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Carousel from "../../components/Carousel/Carousel.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import ProductsState from "../../context/products/productsState.js";
import styles from "./Home.module.css"

function Home() {
  return (
    <main >
    <ProductsState>
      <section>
        <div>
          <Header />
        </div>
      </section>
      <section>
        <Carousel />
      </section>
      <section className={styles.contenedor_cardshome}>
        <div className={styles.contenedor_cardshome}>
          <Cards/>
        </div>
      </section>
      <section>
        <div>
          <Pagination />
        </div>
      </section>
    </ProductsState>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default Home
