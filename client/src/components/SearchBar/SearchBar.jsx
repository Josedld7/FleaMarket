import styles from "./SearchBar.module.css";

const SearchBar = ({ setName }) => {

  const handleInputChange = (e) => {
    setName(e.target.value)
  };

  return (
    <>
      <div >
        <input
          className={styles.contenedor_bar_search}
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
