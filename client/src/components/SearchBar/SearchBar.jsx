import { useDispatch } from 'react-redux'
import { getProductName } from '../../store/actions/index.js'
import styles from './SearchBar.module.css'
import lupa from '../../assets/lupita.png'
const SearchBar = () => {
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    dispatch(getProductName(e.target.value))
  }

  return (
    <div className={styles.container_search}>
      <div>
        <input
          className={styles.contenedor_input_search}
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div>
        <button className={styles.contenedor_search_button} type="submit">
          <img className={styles.icon_search} src={lupa} />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
