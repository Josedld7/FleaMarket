function filterReducer(state = [], action) {
  if (action.type === "FILTER_CATEGORY") {
    const {category, products} = action.payload;
    return products.filter(p => p.category === category);
  }

  if (action.type === "RESET_FILTERED") {
    return [];
  }

  if (action.type === "FILTER_USED") {
    const {condition, products} = action.payload;
    return products.filter(p => p.condition === condition);
  }

  return state;
}

export default filterReducer;