import * as constants from "./cartConstants";
import { createAction } from "redux-actions";

export const add = createAction(constants.ADD);

export const remove = createAction(constants.REMOVE);
