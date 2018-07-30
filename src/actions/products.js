import api from "../request";

export function getProducts(params = "") {
  return {
    type: "FRONTEND/GET_ALL_PRODUCTS",
    payload: api().get("/products", { params }),
    meta: {
      params
    }
  };
}

export function getProduct(id) {
  return {
    type: "FRONTEND/GET_PRODUCT",
    payload: api().get(`/products/${id}`),
    meta: {
      id
    }
  };
}
