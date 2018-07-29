import api from "../request";

export function getProducts(params = "") {
  return {
    type: "FRONTEND/GET_ALL_PRODUCTS",
    payload: api().get("/products", { params }),
    meta: {
      params
    },
  };
}