import * as constants from "./adminProductsConstants";
import { handleActions } from "redux-actions";

const initialState = {
  products: [],
  isLoading: true,
  error: null
};

export default handleActions(
  {
    // FETCH
    [constants.FETCH_PRODUCT_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.FETCH_PRODUCT_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      products: actions.payload.ids
    }),
    [constants.FETCH_PRODUCT_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    }),

    // ADD
    [constants.ADD_PRODUCT_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.ADD_PRODUCT_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      products: [actions.payload.id].concat(state.products)
    }),
    [constants.ADD_PRODUCT_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message
    }),

    // EDIT
    [constants.EDIT_PRODUCT_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.EDIT_PRODUCT_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      products: [actions.payload.id].concat([
        ...state.products.filter(item => item !== actions.payload.id)
      ])
    }),
    [constants.EDIT_PRODUCT_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    }),

    // REMOVE
    [constants.REMOVE_PRODUCT_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.REMOVE_PRODUCT_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      products: state.products.filter(item => item !== actions.payload.id)
    }),
    [constants.REMOVE_PRODUCT_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message
    })
  },
  initialState
);
