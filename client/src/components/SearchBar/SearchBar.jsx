import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getProductByName } from "../../actions/index";

import products, {product1} from '../../testData';
import "./SearchBar.css"
 

export  function SearchBar() {  
  // const dispatch = useDispatch();

  const getProductByName = (name) => {
    return products.find(product => product.title === name)
  }

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(getProductByName(name));
    alert(getProductByName(name).title);
    document.getElementById("search").value = "";
     
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
        <button type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
      </div>      
    </>
  );
};

 