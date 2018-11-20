import { normalize } from "normalizr";
import * as Api from "../../api/Api";
import * as schemes from "../../api/schemes";
import * as actions from "./productsActions";

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(actions.fetchProductsStart());

    const res = await Api.Products.fetchProducts();
    const { result, entities } = normalize(res.data, schemes.ProductCollection);

    dispatch(
      actions.fetchProductsOk({
        ids: result,
        entities
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductsError(err.message));
  }
};

export const fetchProductByID = id => async dispatch => {
  try {
    dispatch(actions.fetchProductByIdStart());
    const res = await Api.Products.fetchProductByID(id);
    dispatch(
      actions.fetchProductByIdOk({
        singleProduct: res.data[0]
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductByIdError(err));
  }
};

export const setPage = (page = 1, itemsCount = 9) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(actions.fetchProductsStart());
    const limit = itemsCount;
    const offset = (page - 1) * limit;
    if (page < 1 || page > getState().products.productsPagination.totalPages) {
      return;
    }
    const res = await Api.Products.fetchProducts(limit, offset);
    const { result, entities } = normalize(res.data, schemes.ProductCollection);
    dispatch(
      actions.fetchProductsOk({
        ids: result,
        entities,
        page
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const initPagination = () => async (dispatch, getState) => {
  try {
    const res = await Api.Products.fetchProducts(50, 0);
    const totalItems = res.data.length;
    const productsPagination = getPager(totalItems);
    dispatch(
      actions.setPager({
        productsPagination
      })
    );
  } catch (err) {
    dispatch(actions.fetchProductsError(err.message));
  }
};

export const setItemsCount = count => async (dispatch, getState) => {
  try {
    const res = await Api.Products.fetchProducts(50, 0);
    const totalItems = res.data.length;
    const productsPagination = getPager(totalItems, 1, count);
    dispatch(
      actions.setPager({
        productsPagination
      })
    );
  } catch (err) {
    console.log(err);
  }
};

function getPager(totalItems = 0, currentPage = 1, pageSize = 9) {
  const totalPages = Math.ceil(totalItems / pageSize);
  let startPage = null,
    endPage = null;
  if (totalPages <= 10) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const pages = [...Array(endPage + 1 - startPage).keys()].map(
    i => startPage + i
  );
  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  };
}
