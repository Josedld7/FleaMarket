function productsReducer(state = {}, action) {
  if (action.type === "LOAD_PRODUCTS") {
    return action.payload;
  }
  return state;
}

export default productsReducer;