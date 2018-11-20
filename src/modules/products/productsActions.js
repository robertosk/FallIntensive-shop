import * as constants from "./productsConstants";
import { createAction } from "redux-actions";

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const setPager = createAction(constants.SET_PAGER);

export const fetchProductByIdStart = createAction(
  constants.FETCH_PRODUCT_BY_ID_START
);
export const fetchProductByIdOk = createAction(
  constants.FETCH_PRODUCT_BY_ID_OK
);
export const fetchProductByIdError = createAction(
  constants.FETCH_PRODUCT_BY_ID_ERROR
);
