import api from "../request";

export function getProducts(params = "", load_type = "append") {
  return {
    type: "FRONTEND/GET_ALL_PRODUCTS",
    payload: api().get("/products", { params }),
    meta: {
      params,
      load_type
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

export function storeProduct(params) {
  return {
    type: "FRONTEND/STORE_PRODUCT",
    payload: api().post(`/products`, params)
  };
}

export function deleteProduct(id) {
  return {
    type: "FRONTEND/DELETE_PRODUCT",
    payload: api().delete(`/products/${id}`)
  };
}
