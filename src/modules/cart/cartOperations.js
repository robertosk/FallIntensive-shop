import { normalize } from "normalizr";
import * as Api from "../../api/Api";
import * as schemes from "../../api/schemes";
import * as actions from "./cartActions";
import store from "store2";

export const initCartData = () => async dispatch => {
  const LS = store.local.get("persist:shop");
  const items = JSON.parse(LS.cart).items;
  const res = await Api.Products.getProductsByIds(items);
  const { result, entities } = normalize(res.data, schemes.ProductCollection);
  dispatch(
    actions.fetchData({
      result,
      entities
    })
  );
};
