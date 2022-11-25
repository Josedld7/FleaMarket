import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import FiltUsed from '../FilterUsed/FilterUsed.jsx'
import FilterCategory from '../FilterCategory/FiltCat.jsx'
import Sort from '../Sort/Sort.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import styles from './Header.module.css'
import fm from '../../assets/fm.png'
import car from '../../assets/carrito3.png'
import { useAuth0 } from '@auth0/auth0-react'
import LinkAuth0 from './auth0/LinkAuth0.jsx'
import LinkJwt from './jwt/LinkJwt.jsx'
import { useEffect, useState } from 'react'
import { loadProducts, loadCategories } from '../../store/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const { user } = useAuth0()

  const [sort, setSort] = useState('')
  const [category, setCategory] = useState('All')
  const [name, setName] = useState('')
  const [condition, setCondition] = useState('')
  const [page, setPage] = useState(1)

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProducts(sort, category, name, condition, page))
    dispatch(loadCategories())
  }, [sort, condition, category, name, page])

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
          <a className={styles.search_bar}><SearchBar setName={(name) => setName(name)} /></a>
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
            <FilterCategory setCategory={(category) => setCategory(category)} />
          </div>
          <div>
            <FiltUsed setCondition={(condition) => setCondition(condition)} />
          </div>
          <div>
            <Sort setSort={(sort) => setSort(sort)} />
          </div>
        </div>
      </section>
      <section className={styles.pagination}>
        <div >
          <Pagination 
            page={page}
            setPage={(page) => setPage(page)}
            total={products.total ? products.total : 0}
            limites={products.limit ? products.limit : 0}
          />
        </div>
      </section>
    </header>
  )
}

export default Header
