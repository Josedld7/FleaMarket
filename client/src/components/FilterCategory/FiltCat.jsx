import React, { useContext } from 'react';
import ProductsContext from "../../context/products/productsContext.js";
import styles from "./filtCat.module.css";

const FilterCategory = () => {

  const { setCategory, categories } = useContext(ProductsContext);

  const handleChange = (e) => {
    e.preventDefault();
    const category = e.target.value;
    setCategory(category)
  }

  return (
    <div>
      <div className={styles.contenedor_category}>  
      <label className={styles.labels} htmlFor="category">Categories </label>
      <select className={styles.selects}
      id="category"
      onChange={handleChange}
      >
      <option value="All" >All</option>
      {categories.map((c, i) => (
        <option value={c.name} name="category" key={i}>{c.name}</option>
        )
        )}
      </select>       
     </div>      
    </div>
  );
};

export default FilterCategory;
