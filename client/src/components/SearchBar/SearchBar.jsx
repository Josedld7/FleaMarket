import styles from "./SearchBar.module.css"; 
import lupa from '../../assets/lupita.png'
const SearchBar = ({ setName }) => {

  const handleInputChange = (e) => {
    setName(e.target.value)
  };

  return (
    <div className={styles.container_search}>
      <div >
        <input
          className={styles.contenedor_input_search}
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button className={styles.contenedor_search_button} >
          <img className={styles.icon_search} src={lupa} />
        </button>
      </div>
      
        
    
    </div>
  );
};

export default SearchBar;
