import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { loadProduct } from "../../actions/index";
import "./SearchBar.css"
 
export  function SearchBar() {  
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const history = useHistory();

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const prod = products.find(p => p.title === name);
    dispatch(loadProduct(prod.id, products));

    history.push(`/detail/${prod.id}`);
  };

  return (
    <>
      <div className="contenedorsearch">
        <input  className="searcher"
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={handleSubmit}> Search </button>
      </div>      
    </>
  );
};

 