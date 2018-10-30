import React, { Component } from "react";
import T from "prop-types";
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
      removeModalStatus: false
    };

    this.onToggleEditModal = this.onToggleEditModal.bind(this);
    this.onToggleRemoveModal = this.onToggleRemoveModal.bind(this);
    this.handleEditSelected = this.handleEditSelected.bind(this);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
    this.onSubmitRemove = this.onSubmitRemove.bind(this);
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
    } else {
      products.push(this.state.selectedProduct);
      ProductListContainer.addProduct(this.state.selectedProduct);
    }
    this.setState(
      {
        editModalStatus: !this.state.editModalStatus
      },
      () => {
        this.props.handleUpdateProductList(products);
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

  render() {
    const { products } = this.props;
    return (
      <ProductListView
        {...this.props}
        {...this.state}
        products={products}
        onToggleEditModal={this.onToggleEditModal}
        onToggleRemoveModal={this.onToggleRemoveModal}
        handleEditSelected={this.handleEditSelected}
        onSubmitEdit={this.onSubmitEdit}
        onSubmitRemove={this.onSubmitRemove}
      />
    );
  }
}
ProductListContainer.addProduct = product =>
  Promise.all([Api.AdminProducts.addProduct(product)]);
ProductListContainer.editProduct = product =>
  Promise.all([Api.AdminProducts.editProduct(product)]);
ProductListContainer.deleteProduct = productId =>
  Promise.all([Api.AdminProducts.deleteProduct(productId)]);

ProductListContainer.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  loading: T.bool,
  selectedProduct: T.shape(productType),
  editModal: T.bool,
  removeModal: T.bool
};

export default ProductListContainer;
