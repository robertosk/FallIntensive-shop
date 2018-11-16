import { createSelector } from "reselect";

const getProductsIds = state => state.cart.items;
const getProductEntities = state => state.entities.products;
const getQuantities = state => state.cart.quantities;

export const getProducts = createSelector(
  [getProductsIds, getProductEntities, getQuantities],
  (ids, entities, quantities) =>
    ids.map(item =>
      entities["quantity"]
        ? entities[item]
        : Object.assign(entities[item], { quantity: quantities[item] })
    )
);
export const getTotalPrice = createSelector(
  [getProducts, getQuantities],
  (items, quantities) =>
    items.reduce((acc, item) => acc + item.price * quantities[item.id], 0)
);
