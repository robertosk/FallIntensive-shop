import * as constants from "./adminConstants";
import { handleActions } from "redux-actions";

const initialState = {
  products: [],
  users: [],
  isLoading: true,
  error: null
};

export default handleActions(
  {
    // FETCH USERS
    [constants.FETCH_USERS_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.FETCH_USERS_OK]: (state, actions) => ({
      ...state,
      isLoading: false,
      users: actions.payload.users
    }),
    [constants.FETCH_USERS_ERROR]: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload.message
    }),

    // FETCH Products
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

    // ADD Products
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
    }),

    // update User Role
    [constants.EDIT_USER_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.EDIT_USER_OK]: state => {
      return {
        ...state,
        isLoading: false
      };
    },
    [constants.EDIT_USER_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message
    }),
    // REMOVE
    [constants.REMOVE_USER_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [constants.REMOVE_USER_OK]: (state, actions) => {
      return {
        ...state,
        isLoading: false,
        users: state.users.filter(user => user.id !== actions.payload.id)
      };
    },
    [constants.REMOVE_USER_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message
    })
  },
  initialState
);
