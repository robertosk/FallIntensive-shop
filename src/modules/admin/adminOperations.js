import { normalize } from "normalizr";
import * as Api from "../../api/Api";
import * as schema from "../../api/schemes";
import * as actions from "./adminActions";

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(actions.fetchProductStart());
    const res = await Api.Products.fetchProducts();
    const { result, entities } = normalize(res.data, schema.ProductCollection);

    dispatch(
      actions.fetchProductOk({
        ids: result,
        entities
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductError(err.message));
  }
};

export const addProduct = product => async dispatch => {
  try {
    dispatch(actions.addProductStart());
    const res = await Api.Products.addProduct(product);
    const { result, entities } = normalize(res.data, schema.ProductCollection);
    dispatch(
      actions.addProductOk({
        id: result[0],
        entities
      })
    );
  } catch (err) {
    dispatch(actions.addProductError(err.message));
  }
};

export const editProduct = product => async dispatch => {
  try {
    dispatch(actions.editProductStart());

    const res = await Api.Products.editProduct(product);
    const { result, entities } = normalize(res.data, schema.ProductCollection);

    dispatch(
      actions.editProductOk({
        id: result[0],
        entities
      })
    );
  } catch (err) {
    dispatch(actions.editProductError(err.message));
  }
};

export const removeProduct = product => async dispatch => {
  try {
    dispatch(actions.removeProductStart());
    const res = await Api.Products.deleteProduct(product.id);
    if (res.data.success) {
      const { result, entities } = normalize(
        [product],
        schema.ProductCollection
      );
      dispatch(actions.removeProductOk({ id: result.id, entities }));
    }
  } catch (err) {
    dispatch(actions.addProductError(err.message));
  }
};

export const fetchUsers = () => async dispatch => {
  try {
    dispatch(actions.fetchUsersStart());
    const res = await Api.User.fetchUsers();
    dispatch(
      actions.fetchUsersOk({
        users: res.data
      })
    );
  } catch (err) {
    dispatch(actions.fetchUsersError(err.message));
  }
};

export const editUserRole = user => async dispatch => {
  try {
    dispatch(actions.editUserStart());
    await Api.User.editUser(user);
    dispatch(actions.editUserOk());
  } catch (err) {
    dispatch(actions.editUserError(err));
  }
};

export const removeUser = userId => async dispatch => {
  try {
    dispatch(actions.removeUserStart());
    await Api.User.deleteUser(userId);
    dispatch(actions.removeUserOk({ id: userId }));
  } catch (err) {
    dispatch(actions.removeUserError(err));
  }
};
