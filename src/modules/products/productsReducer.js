import * as constants from "./productsConstants";
import { handleActions } from "redux-actions";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  singleProduct: {},
  productsPagination: {
    loading: false,
    totalItems: 0,
    currentPage: 1,
    pageSize: 9,
    totalPages: 1,
    startPage: 1,
    endPage: 1,
    startIndex: 1,
    endIndex: 1,
    pages: []
  }
};

export default handleActions(
  {
    [constants.SET_PAGER]: (state, actions) => ({
      ...state,
      productsPagination: actions.payload.productsPagination
    }),

    [constants.FETCH_PRODUCTS_START]: state => ({
      ...state,
      productsPagination: {
        ...state.productsPagination,
        loading: true
      },
      error: null
    }),

    [constants.FETCH_PRODUCTS_OK]: (state, action) => ({
      ...state,
      products: action.payload.ids,
      productsPagination: {
        ...state.productsPagination,
        currentPage: action.payload.page,
        loading: false
      }
    }),

    [constants.FETCH_PRODUCTS_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message
    }),

    [constants.FETCH_PRODUCT_BY_ID_START]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),

    [constants.FETCH_PRODUCT_BY_ID_OK]: (state, action) => ({
      ...state,
      isLoading: false,
      singleProduct: { ...action.payload.singleProduct }
    }),

    [constants.FETCH_PRODUCT_BY_ID_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.message
    })
  },
  initialState
);
