import React, { useContext } from 'react';
import ProductsContext from "../../context/products/productsContext.js";
import styles from "../Sort/Sort.module.css"

const Sort = () => {

  const { setSort } = useContext(ProductsContext)

  const handleSort = (e) => {
    e.preventDefault()
    const sort = e.target.value
    setSort(sort)
  };

  return (
    <div>
      <label className={styles.labels} htmlFor="sort">Price </label>
        <select className={styles.selects} id="sort" onChange={handleSort}>
          <option value="">Untidy</option>
          <option value="asc">Min to Max</option>
          <option value="desc">Max to Min</option>
        </select>
    </div>
    )
}

export default Sort;