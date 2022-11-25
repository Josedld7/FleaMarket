import { useDispatch } from "react-redux";
import {
  sortByPrice
} from '../../store/actions/index.js';
import styles from "../Sort/Sort.module.css"
const Sort = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    e.preventDefault();
    if(e.target.value === "Desorden"){
      dispatch(sortByPrice(""));
    }else{
      dispatch(sortByPrice(e.target.value))
    }
  };

  return (
    <div >
      <label className={styles.labels} htmlFor="sort">Price   </label>
        <select className={styles.selects} id="sort" onChange={handleSort}>
          <option value="Desorden">---</option>
          <option value="asc">Min to Max</option>
          <option value="desc">Max to Min</option>
        </select>
    </div>
    )
}

export default Sort;