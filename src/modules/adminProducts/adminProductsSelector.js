import { createSelector } from "reselect";

const getProductIds = state => state.adminProducts.products;
const getProductEntities = state => state.entities.products;

export const getProducts = createSelector(
  [getProductIds, getProductEntities],
  (products, entities) => products.map(id => entities[id])
);
