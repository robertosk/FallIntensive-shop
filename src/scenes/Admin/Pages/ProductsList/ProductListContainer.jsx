import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

import * as adminOperations from "../../../../modules/admin/adminOperations";
import * as adminSelectors from "../../../../modules/admin/adminSelector";

import ProductListView from "./ProductListView";

const ProductListContainer = props => {
  return <ProductListView {...props} />;
};

const mapStateToProps = state => ({
  products: adminSelectors.getProducts(state),
  isLoading: state.admin.isLoading
});

const mapStateToDispatch = {
  addProduct: adminOperations.addProduct,
  editProduct: adminOperations.editProduct,
  removeProduct: adminOperations.removeProduct
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("selectedProduct", "handleSelectProduct", {}),
  withState("editModalStatus", "handleEditModal", false),
  withState("removeModalStatus", "handleRemoveModal", false),
  withState("orderType", "handleOrderType", "ASC"),
  withState("orderBy", "handleOrderBy", "title"),
  withState("searchQuery", "handleSearch", ""),
  withHandlers({
    onToggleEditModal: props => (e, product) => {
      e.preventDefault();
      props.handleEditModal(!props.editModalStatus);
      if (product) {
        props.handleSelectProduct(product);
      } else {
        props.handleSelectProduct(null);
      }
    },
    onSubmitEdit: props => product => {
      let productIndex = props.products.findIndex(p => p.id === product.id);
      if (productIndex >= 0) {
        props.editProduct(product);
      } else {
        props.addProduct(product);
      }
      props.handleEditModal(!props.editModalStatus);
    },
    onToggleRemoveModal: props => (e, product) => {
      e.preventDefault();
      props.handleRemoveModal(!props.removeModalStatus);
      if (product) {
        props.handleSelectProduct(product);
      } else {
        props.handleSelectProduct(null);
      }
    },
    onSubmitRemove: props => () => {
      props.removeProduct(props.selectedProduct);
      props.handleRemoveModal(!props.removeModalStatus);
    },
    doOrder: props => (orderBy, orderType) => {
      props.handleOrderBy(orderBy);
      props.handleOrderType(orderType);
    },
    doSearch: props => searchQuery => {
      props.handleSearch(searchQuery);
    }
  })
);

export default enhance(ProductListContainer);
