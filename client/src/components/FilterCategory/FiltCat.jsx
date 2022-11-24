import React from "react";
import { useSelector } from "react-redux";
import styles from "./filtCat.module.css";

const FilterCategory = ({ setCategory }) => {

  const categories = useSelector((state) => state.categories);

  const handleChange = (e) => {
    e.preventDefault();
    const category = e.target.value;
    setCategory(category)
  }

  return (
    <div>
      <div className={styles.contenedor_category}>  
      <label htmlFor="categories">Filter by categories: </label>
      <select 
      id="categories"
      onChange={handleChange}
      >
      <option value="All" >All</option>
      {categories.map((c, i) => (
        <option value={c} name="categories" key={i}>{c}</option>
        )
        )}
      </select>       
     </div>      
    </div>
  );
};

export default FilterCategory;
