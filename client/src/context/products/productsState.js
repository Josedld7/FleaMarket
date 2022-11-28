import React, { useEffect, useReducer, useState } from "react";
import ProductsContext from "./productsContext.js";
import ProductsReducer from "./productsReducer.js";
import axios from "axios";
import { BACK_DOMINIO } from "../../config.js";

const ProductsState = ({ children }) => {

	const initialState = {
		products: {},
		categories: [],
		error: {}
	};


	const [ state, dispatch] = useReducer(ProductsReducer, initialState);

    const [category, setCategory] = useState('All');
    const [condition, setCondition] = useState('');
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
	const [sort, setSort] = useState('');

	useEffect(() => {
		getProducts(category, condition, name, page, sort);
		getCategories()
	}, [category, condition, name, page, sort]);

    const getProducts = async () => {
    	const response = await axios(`${BACK_DOMINIO}/api/products?category=${category}&condition=${condition}&name=${name}&page=${page}&sort=${sort}`)
    	.then((res) => {
    		dispatch({
    			type: "GET_PRODUCTS",
    			payload: res.data
    		})
    	})
    	.catch((err) => {
    		dispatch({
    			type: "ERROR",
    			payload: err.response.data.message
    		})
    	})
    };

    const getCategories = async () => {
    	const response = await axios(`${BACK_DOMINIO}/api/category`)
    	dispatch({
    		type: "GET_CATEGORIES",
    		payload: response.data
    	})
    }

    return (
    	<ProductsContext.Provider value={{
    		products: state.products,
    		categories: state.categories,
    		error: state.error,
    		setCategory,
    		setCondition,
    		setName,
    		setPage,
    		setSort
    	}} >
    		{ children }
    	</ProductsContext.Provider>
    	)
};

export default ProductsState;
