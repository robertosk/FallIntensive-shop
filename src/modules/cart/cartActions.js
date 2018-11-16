import * as constants from "./cartConstants";
import { createAction } from "redux-actions";

export const add = createAction(constants.ADD);
export const qtyUp = createAction(constants.QTY_UP);
export const qtyDown = createAction(constants.QTY_DOWN);
export const remove = createAction(constants.REMOVE);
