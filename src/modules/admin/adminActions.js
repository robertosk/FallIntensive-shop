import * as constants from "./adminConstants";
import { createAction } from "redux-actions";

// products actions
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

export const fetchUsersStart = createAction(constants.FETCH_USERS_START);
export const fetchUsersOk = createAction(constants.FETCH_USERS_OK);
export const fetchUsersError = createAction(constants.FETCH_USERS_ERROR);

export const editUserStart = createAction(constants.EDIT_USER_START);
export const editUserOk = createAction(constants.EDIT_USER_OK);
export const editUserError = createAction(constants.EDIT_USER_ERROR);

export const removeUserStart = createAction(constants.REMOVE_USER_START);
export const removeUserOk = createAction(constants.REMOVE_USER_OK);
export const removeUserError = createAction(constants.REMOVE_USER_ERROR);
