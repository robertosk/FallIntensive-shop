import axios from "axios";
const apiPathV1 = "/api/v1";
let _token = null;

export const setToken = token => {
  _token = token;
  axios.defaults.headers.Authorization = _token ? `Bearer ${_token}` : null;
};

export const AdminProducts = {
  fetchProducts() {
    return axios.get(`${apiPathV1}/products`);
  },
  fetchProductByID(id) {
    return axios.get(`${apiPathV1}/products/${id}`);
  },
  addProduct(product) {
    return axios.post(`${apiPathV1}/products`, product);
  },
  editProduct(product) {
    return axios.patch(`${apiPathV1}/products/${product.id}`, product);
  },
  deleteProduct(id) {
    return axios.delete(`${apiPathV1}/products/${id}`);
  }
};
