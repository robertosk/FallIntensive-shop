import { createSelector } from "reselect";

const getProductIds = state => state.products.products;
const getProductEntities = state => state.entities.products;
const getProductByID = (state, id) => state.entities.products[id];

export const getProducts = createSelector(
  [getProductIds, getProductEntities],
  (products, entities) => products.map(id => entities[id])
);

export const getProduct = createSelector(
  getProductByID,
  result => result
);
