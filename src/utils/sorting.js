import _ from "lodash";

export function sortProducts(products, orderBy, orderType) {
  return _.orderBy(products, orderBy, orderType);
}

export function searchProducts(products, searchQuery) {
  return products.filter(
    product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
}