import { handleActions } from "redux-actions";
import * as constants from "./cartConstants";

const initialState = {
  items: []
};

export default handleActions(
  {
    [constants.ADD]: (state, actions) => ({
      items: [actions.payload.id].concat(state.items)
    }),

    [constants.REMOVE]: (state, actions) => ({
      items: [...state.items].filter(item => item !== actions.payload)
    })
  },
  initialState
);
