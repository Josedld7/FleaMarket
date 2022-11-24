import axios from 'axios';

const host = "http://localhost:3001";

export function loadProducts(sort, category, name, condition, page){
  return async function(dispatch){
    const response = await axios.get(`${host}/api/products?category=${category}&sort=${sort}&condition=${condition}&name=${name}&page=${page}`)
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: response.data
    })
  }
};

export function loadProduct(id) {
  return async function (dispatch) {
    if (id) {
      const response = await axios.get(`${host}/api/product/${id}`)
      dispatch({
        type: "LOAD_PRODUCT",
        payload: response.data
      })
    }else{
      dispatch({
        type: "void"
      })
    }

  }
};

export function loadCategories() {
  return function (dispatch) {
    return fetch(`${host}/api/category`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "LOAD_CATEGORIES",
          payload: data,
        });
      });
  };
}

export const postFormPay = (payload) => {
  return async function () {
    try {
      const json = await axios.post('http://localhost:3001/api/payment', payload);
      return json
    } catch (e) {
      console.log(e);
    }
  }
}

export const postReviews = (payload) => {
  return async function () {
    try {
      const json = await axios.post('http://localhost:3001/api/review',payload);
      return json
    } catch (e) {
      console.log(e);
    }
  }
}

export const getReview = () => {
  return async function(dispatch){
    try {
      const json = await axios.get('http://localhost:3001/api/review');
      return dispatch({type:"GET_REVIEW", payload: json.data});
    } catch (e) {
      console.log(e);
    }
  }
}

export function shopingCar(opt, data) {
  return function (dispatch) {
    dispatch({
      type: opt,
      payload: data
    })
  }
};

export function subTotal(opt, value) {
  return function (dispatch) {
    dispatch({
      type: opt,
      payload: value
    })
  }
};