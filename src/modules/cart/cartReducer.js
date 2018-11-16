import { handleActions } from "redux-actions";
import * as constants from "./cartConstants";

const initialState = {
  items: [],
  quantities: {}
};

export default handleActions(
  {
    [constants.ADD]: (state, actions) => {
      return {
        ...state,
        items:
          state.items.findIndex(item => item === actions.payload.id) !== -1
            ? state.items
            : [actions.payload.id].concat(state.items),
        quantities: {
          ...state.quantities,
          [actions.payload.id]: (state.quantities[actions.payload.id] || 0) + 1
        }
        // state.findIndex(item => item.id === actions.payload.id) !== -1
        //? state.items

        //[{ id: actions.payload.id, quantity: 1 }].concat(state.items)
      };
    },
    [constants.QTY_UP]: (state, actions) => {
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [actions.payload.id]: (state.quantities[actions.payload.id] || 0) + 1
        }
      };
    },
    [constants.QTY_DOWN]: (state, actions) => {
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [actions.payload.id]: (state.quantities[actions.payload.id] || 0) - 1
        }
      };
    },
    [constants.REMOVE]: (state, actions) => ({
      ...state,
      items: [...state.items].filter(item => item !== actions.payload)
    })
  },
  initialState
);
