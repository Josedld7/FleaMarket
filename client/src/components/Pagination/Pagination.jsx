import React, { useContext } from 'react';
import ProductsContext from "../../context/products/productsContext.js";
import s from "./Pagination.module.css";

const Pagination = () => {

  const { page, setPage, products } = useContext(ProductsContext);

  let total = products.total;
  let limit = products.limit

  const totalPages = Math.ceil(total / limit)

  const handleClick = (newPage) => {
      setPage(newPage + 1);
  };

  return (
    <div className={s.container} >
      {totalPages > 0 && 
        [...Array(totalPages)].map((val, index) => (
          <button
          className={
            page === index + 1 ? `${s.page_btn} ${s.active}` : s.page_btn
          }
          type="button"
          key={index}
          onClick={() => handleClick(index)}
          >{index + 1}</button>
          ))
      }
    </div>
  );
}

export default Pagination
