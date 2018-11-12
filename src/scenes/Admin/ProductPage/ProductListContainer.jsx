import React, { Component } from "react";

import { connect } from "react-redux";

import * as adminProductsOperations from "../../../modules/adminProducts/adminProductsOperations";
import * as adminProductsSelectors from "../../../modules/adminProducts/adminProductsSelector";

import T from "prop-types";
import { productType } from "../../../common/propTypes";

import { createProduct } from "../../../utils/creators";
import { sortProducts, searchProducts } from "../../../utils/sorting";

import ProductListView from "./ProductListView";

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: createProduct(),
      editModalStatus: false,
      removeModalStatus: false,
      orderType: "ASC",
      orderBy: "title",
      searchQuery: ""
    };

    this.onToggleEditModal = this.onToggleEditModal.bind(this);
    this.onToggleRemoveModal = this.onToggleRemoveModal.bind(this);
    this.handleEditSelected = this.handleEditSelected.bind(this);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
    this.onSubmitRemove = this.onSubmitRemove.bind(this);
    this.doOrderType = this.doOrderType.bind(this);
    this.doOrderBy = this.doOrderBy.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }
  onToggleEditModal(e, selectedProduct = createProduct()) {
    e.preventDefault();
    this.setState({
      selectedProduct,
      editModalStatus: !this.state.editModalStatus
    });
  }
  handleEditSelected(name, value) {
    this.setState({
      selectedProduct: {
        ...this.state.selectedProduct,
        [name]: name === "price" ? Number(value) : value
      }
    });
  }

  onSubmitEdit() {
    let products = [...this.props.products];
    let productIndex = products.findIndex(
      p => p.id === this.state.selectedProduct.id
    );
    if (productIndex >= 0) {
      products[productIndex] = this.state.selectedProduct;
      this.props.editProduct(this.state.selectedProduct);
      // ProductListContainer.editProduct(this.state.selectedProduct);
    } else {
      products.push(this.state.selectedProduct);
      this.props.addProduct(this.state.selectedProduct);
      // ProductListContainer.addProduct(this.state.selectedProduct);
    }
    this.setState({
      editModalStatus: !this.state.editModalStatus
    });
  }
  onToggleRemoveModal(e, productId) {
    e.preventDefault();
    this.setState({
      selectedProduct:
        this.props.products.find(pr => pr.id === productId) || createProduct(),
      removeModalStatus: !this.state.removeModalStatus
    });
  }
  onSubmitRemove(product) {
    this.props.removeProduct(product);
    this.setState({
      removeModalStatus: !this.state.removeModalStatus
    });
  }
  doOrderType(orderType = "ASC") {
    this.setState({ orderType });
  }
  doOrderBy(orderBy = "title") {
    this.setState({ orderBy });
  }
  doSearch(searchQuery) {
    this.setState({ searchQuery });
  }
  async componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    let sortedProducts = sortProducts(
      products,
      this.state.orderBy,
      this.state.orderType
    );
    sortedProducts = searchProducts(sortedProducts, this.state.searchQuery);
    return (
      <ProductListView
        {...this.props}
        {...this.state}
        products={sortedProducts}
        onToggleEditModal={this.onToggleEditModal}
        onToggleRemoveModal={this.onToggleRemoveModal}
        handleEditSelected={this.handleEditSelected}
        onSubmitEdit={this.onSubmitEdit}
        onSubmitRemove={this.onSubmitRemove}
        doOrderType={this.doOrderType}
        doOrderBy={this.doOrderBy}
        doSearch={this.doSearch}
      />
    );
  }
}
/*
ProductListContainer.addProduct = product =>
  Promise.all([Api.Products.addProduct(product)]);
ProductListContainer.editProduct = product =>
  Promise.all([Api.Products.editProduct(product)]);
ProductListContainer.deleteProduct = productId =>
  Promise.all([Api.Products.deleteProduct(productId)]);
*/

ProductListContainer.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  loading: T.bool,
  selectedProduct: T.shape(productType),
  editModal: T.bool,
  removeModal: T.bool
};

const mapStateToProps = state => ({
  products: adminProductsSelectors.getProducts(state),
  isLoading: state.adminProducts.isLoading
});

const mapStateToDispatch = {
  fetchProducts: adminProductsOperations.fetchProducts,
  addProduct: adminProductsOperations.addProduct,
  editProduct: adminProductsOperations.editProduct,
  removeProduct: adminProductsOperations.removeProduct
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ProductListContainer);
