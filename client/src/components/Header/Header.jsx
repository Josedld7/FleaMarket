import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import FiltUsed from '../FilterUsed/FilterUsed.jsx'
import FilterCategory from '../FilterCategory/FiltCat.jsx'
import Sort from '../Sort/Sort.jsx'
import styles from './Header.module.css'
import fm from '../../assets/fm.png'
import car from '../../assets/carrito3.png'
import { useAuth0 } from '@auth0/auth0-react'
import LinkAuth0 from './auth0/LinkAuth0.jsx'
import LinkJwt from './jwt/LinkJwt.jsx'

const Header = () => {
  const { user } = useAuth0()

  return (
    <header className={styles.container}>
      <section className={styles.container_position_select_principal}>

        <div className={styles.container_logo_and_title}>
          <div>
            <Link to="/">
              <img className={styles.logo_flemarket} alt="logo" src={fm} />
            </Link>
          </div>

          <div>
            <h1 className={styles.title_flemarket}> FleaMarket </h1>
          </div>
        </div>

        <div>
          <a className={styles.search_bar}><SearchBar /></a>
        </div>

        <div>
          <Link to="/shoping">
            <img className={styles.shoping_car} src={car} />{' '}
          </Link>
        </div>

        <div className={styles.container_register_login}>
          {user ? <LinkAuth0 /> : <LinkJwt />}
        </div>

      </section>

      <section className={styles.section_filters}>
        <div className={styles.sections_position}>
          <div>
            <FilterCategory />
          </div>
          <div>
            <FiltUsed />
          </div>
          <div>
            <Sort />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
