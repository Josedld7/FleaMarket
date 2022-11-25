function shopingReducer(state = JSON.parse(sessionStorage.getItem("carrito")), action) {

    function quantites () {
        let copyProducts = JSON.parse(sessionStorage.getItem("carrito"));
        let prices = copyProducts.map(e => e.price)
        sessionStorage.setItem("prices", JSON.stringify(prices))
    }

    if (state === null) {
        state = []
    }

    if (action.type === "ADD") {
        const product = state.find(e => e._id === action.payload._id);
        if (!product) {
            sessionStorage.setItem("carrito", JSON.stringify([...state, action.payload]));
            quantites();
            return [...state, action.payload]
        } else {
            sessionStorage.setItem("carrito", JSON.stringify([...state]));
            quantites();
            return [...state]
        }

    }
    if (action.type === "DEL") {
        const stateFiltered = state.filter((e) => e._id !== action.payload);
        sessionStorage.setItem("carrito", JSON.stringify(stateFiltered));
        //quantites();
        return stateFiltered
    }

    if (action.type === "REST") {
        sessionStorage.setItem("carrito", JSON.stringify([]));
        sessionStorage.setItem("prices", JSON.stringify([]));
        return []
    }

    return state;
}

export default shopingReducer;