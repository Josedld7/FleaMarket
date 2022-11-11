import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function FilterCategory(){

  // const dispatch = useDispatch();
  

  const handleChange = (e) => {
    e.preventDefault()
    if(e.target.value === "Todo"){
      //dispatch(getProducts()); [remplazar el nombre de la funcion];
    }else{
      //dispatch(filterCategory(e.target.value)); [remplazar el nombre de la funcion]
    }
  }



  return(
    // <div>
    //   <div>
    //     <label >Filtro por Categoria</label>
    //     <select onChange={handleChange}>
    //       <option value="Todo">Todo</option>
    //       <option value="men">men's clothing</option>
    //       <option value="jewelery">jewelery</option>
    //     </select>
    //   </div>
    // </div>

    <div>
      <button>
        <p class="px-4">Dropdown</p>
        <span class="border-l p-2 hover:bg-gray-100">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
        <div class="absolute hideen grop-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
          <ul class="text-left border rounded">
            <li class="px-4 py-1 hover:bg-gray-100 border-b">All</li>
            <li class="px-4 py-1 hover:bg-gray-100 border-b">men's clothing</li>
            <li class="px-4 py-1 hover:bg-gray-100 border-b">jewelery</li>
          </ul>
        </div>
      </button>
    </div>
    
  )
}