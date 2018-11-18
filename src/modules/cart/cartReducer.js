import { handleActions } from "redux-actions";
import * as constants from "./cartConstants";
import _ from "lodash";

const initialState = {
  items: [],
  quantities: {}
};

export default handleActions(
  {
    [constants.FETCH_DATA]: (state, actions) => ({
      ...state
    }),
    [constants.ADD]: (state, actions) => ({
      ...state,
      items:
        state.items.findIndex(item => item === actions.payload.id) !== -1
          ? state.items
          : [actions.payload.id].concat(state.items),
      quantities: {
        ...state.quantities,
        [actions.payload.id]: (state.quantities[actions.payload.id] || 0) + 1
      }
    }),
    [constants.QTY_UP]: (state, actions) => ({
      ...state,
      quantities: {
        ...state.quantities,
        [actions.payload.id]: (state.quantities[actions.payload.id] || 0) + 1
      }
    }),

    [constants.QTY_DOWN]: (state, actions) => ({
      ...state,
      quantities: {
        ...state.quantities,
        [actions.payload.id]: (state.quantities[actions.payload.id] || 0) - 1
      }
    }),
    [constants.REMOVE]: (state, actions) => ({
      ...state,
      items: [...state.items].filter(item => item !== actions.payload),
      quantities: _.omit(state.quantities, [actions.payload])
    })
  },
  initialState
);
