import { createSelector } from "reselect";
import _ from "lodash";

const getQuantities = state => state.cart.quantities;
const getProductEntities = state => {
  let entities = null;
  if (_.isEmpty(state.entities.products)) {
    entities = state.cart.entities;
  } else {
    entities = state.entities.products;
  }
  return entities;
};

export const initCartEntities = createSelector(
  [getQuantities, getProductEntities],
  (quantities, entities) => Object.keys(quantities).map(id => entities[id])
);

export const getProducts = createSelector(
  [getProductEntities, getQuantities],
  (entities, quantities) => {
    return Object.keys(quantities).map(item => {
      return entities["quantity"]
        ? entities[item]
        : Object.assign(entities[item], { quantity: quantities[item] });
    });
  }
);

export const getTotalPrice = createSelector(
  [getProducts, getQuantities],
  (items, quantities) =>
    items.reduce((acc, item) => acc + item.price * quantities[item.id], 0)
);
