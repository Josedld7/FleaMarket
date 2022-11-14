import React from 'react'
import { useParams } from 'react-router-dom'
import  { product1 } from '../../testData.js'
import './Detail.scss'
import { loadProduct } from '../../actions/index.js'

export function Detail() {

   /* const params = useParams();
    const id = parseInt(params.id);

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const p = useSelector(state => state.product);

    useEffect(() => {
      dispatch(loadProduct(id, products));
    }) */
    
const getDetail = () => {
      return product1
    }
    const p = getDetail()
    console.log(p)
  
    let params = useParams()
    console.log(params.id)
  return (
    <div>
    <div class="grid  sm:grid-cols-2 p-8 m-15 ">
      {/*  col-Izq */}

      <div class="img-product" >
        <div class="p-8 m-3  rounded  border-gray-300" >
          <img src={p.image} width="550px" height="450px" />
        </div>

        <div>
          <div class="col">
            <div class="tabs">

              <div class="tab">
                <input type="checkbox" id="chck1" />
                <label class="tab-label" for="chck1">
                  Description
                </label>
                <div class="tab-content">{p.description}</div>
              </div>

              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                Caracterist     
                </label>
                <div class="tab-content">
                  <p>Product made of cotton</p>
                  <p>Height: 30cm</p>
                  <p>With: 25cm</p>
                </div>
              </div>

             

            </div>
          </div>
        </div>
      </div>

      {/*  col-Derecha */}
      <div class="bg-gray-100 border-solid border-2 rounded  border-gray-300 ml-2 ">
        <div class="bg-gray-200  rounded-md w-auto">
          <a>
            <a class="rounded text-1xl text-blue-700  m-1">Category </a> {p.category}
          </a>
        </div>
        <div class="m-0.1 p-3 text-4xl ">
          <a> {p.title}</a>
        </div>
        <div class="text-6xl font-semibold text-yellow-400 p-3">
         
        <div class="flex items-center">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </div>
            {p.rating?.rate}
         
        </div>
        <div class="text-6xl font-semibold text-blue-700 p-3">
          <a>$ {p.price}</a>
        </div>
        <div>
          <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-9 rounded m-5">
            Add to my Car
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
