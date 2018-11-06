import React, { Component } from "react";
import T from "prop-types";
import _ from "lodash";
import * as Api from "../../../api/Api";
import { productType } from "../../../common/propTypes";
import ProductListView from "./ProductListView";
import { createProduct } from "../../../utils/creators";

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
      ProductListContainer.editProduct(this.state.selectedProduct);
    } else {
      products.push(this.state.selectedProduct);
      ProductListContainer.addProduct(this.state.selectedProduct);
    }
    this.setState(
      {
        editModalStatus: !this.state.editModalStatus
      },
      () => {
        //this.props.handleUpdateProductList(products);
      }
    );
  }
  onToggleRemoveModal(e, productId) {
    e.preventDefault();
    this.setState({
      selectedProduct:
        this.props.products.find(pr => pr.id === productId) || createProduct(),
      removeModalStatus: !this.state.removeModalStatus
    });
  }
  onSubmitRemove(productId) {
    let products = this.props.products.filter(p => p.id !== productId);
    this.setState(
      {
        removeModalStatus: !this.state.removeModalStatus
      },
      () => {
        ProductListContainer.deleteProduct(productId);
        this.props.handleUpdateProductList(products);
      }
    );
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

  render() {
    const { products } = this.props;
    let sortedProducts = _.orderBy(
      products,
      this.state.orderBy,
      this.state.orderType
    );
    sortedProducts = sortedProducts.filter(
      product =>
        product.title
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase())
    );
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
ProductListContainer.addProduct = product =>
  Promise.all([Api.Products.addProduct(product)]);
ProductListContainer.editProduct = product =>
  Promise.all([Api.Products.editProduct(product)]);
ProductListContainer.deleteProduct = productId =>
  Promise.all([Api.Products.deleteProduct(productId)]);

ProductListContainer.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  loading: T.bool,
  selectedProduct: T.shape(productType),
  editModal: T.bool,
  removeModal: T.bool
};

export default ProductListContainer;
