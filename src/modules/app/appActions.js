import * as constants from "./appConstants";
import { createAction } from "redux-actions";

export const getCurrentUser = createAction(constants.GET_CURRENT_USER);

export const logInUserStart = createAction(constants.LOGIN_USER_START);
export const logInUserOK = createAction(constants.LOGIN_USER_OK);
export const logInUserError = createAction(constants.LOGIN_USER_ERROR);

export const registerUserStart = createAction(constants.REGISTER_USER_START);
export const registerUserOK = createAction(constants.REGISTER_USER_OK);
export const registerUserError = createAction(constants.REGISTER_USER_ERROR);

export const logOutUser = createAction(constants.LOGOUT_USER);
