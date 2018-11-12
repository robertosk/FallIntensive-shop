import * as constants from "./adminProductsConstants";
import { createAction } from "redux-actions";

export const fetchProductStart = createAction(constants.FETCH_PRODUCT_START);
export const fetchProductOk = createAction(constants.FETCH_PRODUCT_OK);
export const fetchProductError = createAction(constants.FETCH_PRODUCT_ERROR);

export const addProductStart = createAction(constants.ADD_PRODUCT_START);
export const addProductOk = createAction(constants.ADD_PRODUCT_OK);
export const addProductError = createAction(constants.ADD_PRODUCT_ERROR);

export const editProductStart = createAction(constants.EDIT_PRODUCT_START);
export const editProductOk = createAction(constants.EDIT_PRODUCT_OK);
export const editProductError = createAction(constants.EDIT_PRODUCT_ERROR);

export const removeProductStart = createAction(constants.REMOVE_PRODUCT_START);
export const removeProductOk = createAction(constants.REMOVE_PRODUCT_OK);
export const removeProductError = createAction(constants.REMOVE_PRODUCT_ERROR);
