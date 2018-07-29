const initialState = {
  loading: true,
  pagination_links: [],
  products: [],
  next_page: 1,
  is_end_page: false
};

export default function productsReducer(state = initialState, action) {
  if (action.type === 'FRONTEND/GET_ALL_PRODUCTS_PENDING') {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === 'FRONTEND/GET_ALL_PRODUCTS_FULFILLED') {
    let products = action.payload.data.data;
    products = [...state.products, ...products];
    const next_page = state.next_page + 1;
    const is_end_page = (action.payload.data.data.length === 0) ? true : false;
    return {
      ...state,
      products,
      next_page,
      is_end_page,
      loading: false,
    };
  }

  return state;
}