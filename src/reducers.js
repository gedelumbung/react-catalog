import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './reducer/products';
import product from './reducer/product';

const rootReducer = combineReducers({
  routing: routerReducer,
  products,
  product
});

export default rootReducer;
