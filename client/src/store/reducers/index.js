import productReducer from "./productReducer";
import shopingReducer from "./shopingReducer";
import reviewReducer from "./reviewReducer";

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  product: productReducer,
  shoping: shopingReducer,
  reviews: reviewReducer 
});

export default allReducers;
