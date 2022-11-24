import Cards from './../../components/Cards/Cards.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Carousel from "../../components/Carousel/Carousel.jsx";

function Home() {
  return (
    <main>
      <section>
        <div>
          <Header />
        </div>
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <div>
          <Cards />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default Home
