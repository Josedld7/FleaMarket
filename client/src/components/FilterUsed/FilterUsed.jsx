import React, { useContext } from 'react';
import ProductsContext from "../../context/products/productsContext.js";
import styles from "./FilterUsed.module.css";

const FiltUsed = () => {

  const { setCondition } = useContext(ProductsContext);

  const handleCondition = (e) => {
    e.preventDefault();
    const condition = e.target.value;
    setCondition(condition)
  };

  return (
    <div>
      <label className={styles.labels} htmlFor="condition">Condition </label>
      <select
        className={styles.contenedor_select_condition}
        onChange={handleCondition}
        id="condition"
      >
        <option value="">All</option>
        <option value="Nuevo">New</option>
        <option value="Usado">Used</option>
      </select>
    </div>
  );
};

export default FiltUsed;
