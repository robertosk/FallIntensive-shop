import axios from "axios";
import store from "store2";
const apiPath = "/api/v3";

let _token = null;

export const setToken = token => {
  _token = token;
  store.local.set("token", _token);
  axios.defaults.headers.Authorization = _token ? `Bearer ${_token}` : null;
};

export const removeToken = () => {
  store.local.remove("token");
  axios.defaults.headers.Authorization = null;
};

export const initApi = () => {
  const token = store.local.get("token");
  setToken(token);
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

export const Auth = {
  login(body) {
    return axios.post(`${apiPath}/auth/login`, body);
  },
  register(body) {
    return axios.post(`${apiPath}/auth/register`, body);
  },
  remember(body) {
    return axios.post(`${apiPath}/auth/remember`, body);
  }
};

export const User = {
  fetchUsers() {
    return axios.get(`${apiPath}/users`);
  },
  getCurrent() {
    return axios.get(`${apiPath}/users/current`);
  },
  getUserById(id) {
    return axios.get(`${apiPath}/users/${id}`);
  },
  deleteUser(id) {
    return axios.delete(`${apiPath}/users/${id}`);
  },
  editUser(user) {
    return axios.patch(`${apiPath}/users/${user.id}`, user);
  }
};
