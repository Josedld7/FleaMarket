import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import { getDetail} from '../../actions'
import data, { product1 } from '../../testData.js'

import { FaStar } from 'react-icons/fa'

export function Detail() {
  const getDetail = () => {
    return product1
  }
  const p = getDetail()
  console.log(p)

  let params = useParams()
  console.log(params.id)

  /* const dispatch = useDispatch()
    let {id} = useParams()
    const producto = useSelector((state) => state.detail)

     useEffect(()=> {
        dispatch(getDetail(id))
    },[dispatch]) */

  return (
    <div>
      <div class="grid  sm:grid-cols-2 p-8 ">

        {/*  col-Izq */} 
        <div class="m-3 p-2">  
          <div class="p-8 m-3">
            <img src={p.image} width="450px" height="450px" />
          </div>

          <div class="grid   gap-1 m-1">
            <div className="p-3">
              <h4 class="bg-gray-200 rounded-md text-2xl text-blue-700 p-1 mb-2">Caracterist </h4>
              <a>{p.description}</a>
            </div>
            <div className=" p-3">
              <h4 class="bg-gray-200  rounded-md text-2xl text-blue-700 p-1 mb-2">Description </h4>
              <a> {p.description}</a>
            </div>           
          </div>

        </div>

 
 

       
        {/*  col-Derecha */} 
        <div className="  border-solid border-2 border-gray-300   "> 
              <div className="bg-gray-200  rounded-md w-auto">
                <a><a class="text-1xl text-blue-700  m-1">Category </a> {p.category}</a>
              </div>
              <div className="m-0.1 p-3 text-4xl ">
                <a> {p.title}</a>
              </div>
              <div>
                <a><a><FaStar /></a>{p.rating.rate}</a>
              </div>
              <div class="text-3xl font-semibold text-blue-700 p-3">
                <a>$ {p.price}</a>
              </div>
              <div>
                <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
        </div>



      </div>


      
    </div>
  )
}
