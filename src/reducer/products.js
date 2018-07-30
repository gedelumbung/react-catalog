const initialState = {
  loading: true,
  pagination_links: [],
  products: [],
  next_page: 1,
  is_end_page: false
};

export default function productsReducer(state = initialState, action) {
  if (action.type === "FRONTEND/GET_ALL_PRODUCTS_PENDING") {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === "FRONTEND/GET_ALL_PRODUCTS_FULFILLED") {
    let products = action.payload.data.data;
    let next_page = 2;
    const is_end_page = action.payload.data.data.length === 0 ? true : false;

    if (action.meta.load_type === "append") {
      products = [...state.products, ...products];
      next_page = state.next_page + 1;
    }

    return {
      ...state,
      products,
      next_page,
      is_end_page,
      loading: false
    };
  }

  return state;
}
