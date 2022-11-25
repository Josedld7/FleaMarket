import React from "react";
import styles from "./FilterUsed.module.css";
import { useDispatch } from "react-redux";
import { filterUsed } from "../../store/actions/index.js";

const FiltUsed = () => {
  const dispatch = useDispatch();

  const handleCondition = (e) => {
    e.preventDefault();
    if (e.target.value === "All") {
      dispatch(filterUsed(""));
    } else {
      dispatch(filterUsed(e.target.value));
    }
  };

  return (
    <div>
      <label className={styles.labels} htmlFor="condition">Condition  </label>
      <select
        className={styles.contenedor_select_condition}
        onChange={handleCondition}
        id="condition"
      >
        <option value="All">All</option>
        <option value="Nuevo">New</option>
        <option value="Usado">Used</option>
      </select>
    </div>
  );
};
export default FiltUsed;
