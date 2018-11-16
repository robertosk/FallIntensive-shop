import * as constants from "./appConstants";
import { handleActions } from "redux-actions";

const initialState = {
  currentUser: {},
  loading: false,
  loggedIn: false,
  error: null
};

export default handleActions(
  {
    [constants.GET_CURRENT_USER]: (state, actions) => {
      return {
        ...state,
        currentUser: actions.payload.user,
        loggedIn: actions.payload.isLogged
      };
    },

    [constants.LOGIN_USER_START]: state => {
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    [constants.LOGIN_USER_OK]: (state, actions) => {
      return {
        ...state,
        currentUser: actions.payload.user,
        loggedIn: actions.payload.isLogged
      };
    },
    [constants.LOGIN_USER_ERROR]: (state, actions) => {
      return {
        ...state,
        currentUser: {},
        loggedIn: false,
        error: actions.payload.message
      };
    },

    [constants.LOGOUT_USER]: state => {
      return {
        ...state,
        loggedIn: false,
        currentUser: {}
      };
    }
  },
  initialState
);
