import { normalize } from "normalizr";
import * as Api from "../../api/Api";
import * as schemes from "../../api/schemes";
import * as actions from "./cartActions";

export const getEntitiesData = () => async (dispatch, getState) => {
  const items = Object.keys(getState().cart.quantities);
  if (items) {
    const res = await Api.Products.getProductsByIds(items);
    const { result, entities } = normalize(res.data, schemes.ProductCollection);

    dispatch(
      actions.fetchData({
        result,
        entities
      })
    );
  }
};
