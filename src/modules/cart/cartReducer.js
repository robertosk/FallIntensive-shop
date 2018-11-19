import { handleActions } from "redux-actions";
import * as constants from "./cartConstants";
import _ from "lodash";

const initialState = {
  quantities: {},
  entities: {}
};

export default handleActions(
  {
    [constants.FETCH_DATA]: (state, actions) => ({
      ...state,
      entities: { ...actions.payload.entities.products }
    }),

    [constants.ADD]: (state, actions) => ({
      ...state,
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
      quantities: _.omit(state.quantities, [actions.payload])
    })
  },
  initialState
);
