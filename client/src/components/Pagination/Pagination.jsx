import React from 'react';
import s from "./Pagination.module.css"

const Pagination = ({ page, total, limites, setPage }) => {

  const totalPages = Math.ceil(total / limites)

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
