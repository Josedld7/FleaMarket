import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './filtCat.module.css'
import { filterCategory, loadCategories } from '../../store/actions/index.js'

const FilterCategory = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)
  let [category, setCategory] = useState([])
  if (categories.length === 0) {
    dispatch(loadCategories())
  }

  const selectHandle = (e) => {
    e.preventDefault()
    if (e.target.value === 'All') {
      dispatch(filterCategory(e.target.value))
      setCategory([])
    } else {
      let categ = category.find((c) => c === e.target.value)
      if (!categ) {
        setCategory([...category, e.target.value])
      }
    }
  }

  const deleteHandle = (e) => {
    e.preventDefault()
    setCategory(category.filter((c) => c !== e.target.value))
  }
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(filterCategory(category))

    setCategory([])
  }

  return (
    <div>
      <div className={styles.contenedor_category}>
        <form onSubmit={handleClick}>
          <label className={styles.labels} htmlFor="categories">Categories</label>
          <select className={styles.selects}  id="categories" onChange={selectHandle}>
            <option  value="All">All</option>
            {categories.map((c, i) => (
              <option  value={c} name="categories" key={i}>
                {c}
              </option>
            ))}
          </select>
          <button className={styles.button_filter} type="submit">Filter</button>
        </form>
        <div >
          {category.map((c, i) => (
            <div className={styles.select_delete_category}cid={c} key={i}>
              {c}
              <button className={styles.button_x}  type="button" value={c} onClick={(e) => deleteHandle(e)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default FilterCategory
