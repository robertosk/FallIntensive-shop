import axios from "axios";
const apiPath = "/api/v1";

let _token = null;

export const setToken = token => {
  _token = token;
  axios.defaults.headers.Authorization = _token ? `Bearer ${_token}` : null;
};

export const Products = {
  fetchProducts() {
    return axios.get(`${apiPath}/products`);
  },
  fetchProductByID(id) {
    return axios.get(`${apiPath}/products/${id}`);
  },
  addProduct(product) {
    return axios.post(`${apiPath}/products`, product);
  },
  editProduct(product) {
    return axios.patch(`${apiPath}/products/${product.id}`, product);
  },
  deleteProduct(id) {
    return axios.delete(`${apiPath}/products/${id}`);
  }
};
