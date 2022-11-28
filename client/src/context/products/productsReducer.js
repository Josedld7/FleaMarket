export default (state, action) => {

	const { payload, type } = action;

	switch(type){
		case "GET_PRODUCTS":
		return {
			...state,
			products: payload,
			error: {}
		}
		case "GET_CATEGORIES":
		return {
			...state,
			categories: payload
		}
		case "ERROR":
		return {
			...state,
			error: payload 
		}
	}
}