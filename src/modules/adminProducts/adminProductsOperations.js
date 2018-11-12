import { normalize } from "normalizr";
import * as Api from "../../api/Api";
import * as schema from "../../api/schemes";
import * as actions from "./adminProductsActions";

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
