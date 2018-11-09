import { normalize } from "normalizr";
import * as Api from "../../api/Api";
import * as schemes from "../../api/schemes";
import * as actions from "./productsActions";

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(actions.fetchProductsStart());

    const res = await Api.Products.fetchProducts();

    const { result, entities } = normalize(res.data, schemes.ProductCollection);

    dispatch(
      actions.fetchProductsOk({
        ids: result,
        entities
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductsError(err.message));
  }
};
