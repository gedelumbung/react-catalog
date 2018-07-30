const initialState = {
    loading: true,
    product: {}
  };
  
  export default function productReducer(state = initialState, action) {
    if (action.type === 'FRONTEND/GET_PRODUCT_PENDING') {
      return {
        ...state,
        loading: true,
      };
    }
  
    if (action.type === 'FRONTEND/GET_PRODUCT_FULFILLED') {
      let product = action.payload.data.data;
      return {
        ...state,
        product,
        loading: false,
      };
    }
  
    return state;
  }