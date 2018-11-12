import React, { Component } from "react";
import { connect } from "react-redux";

import "../../vendor/adminTemplate/style.scss";
import T from "prop-types";
import { productType } from "../../common/propTypes";

import * as adminProductOperations from "../../modules/adminProducts/adminProductsOperations";
import * as adminProductsSelectors from "../../modules/adminProducts/adminProductsSelector";

import AdminPageView from "./AdminPageView";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSidebar: false
    };

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }
  handleToggleSidebar() {
    this.setState({ toggleSidebar: !this.state.toggleSidebar });
  }
  async componentDidMount() {
    // this.props.fetchProducts();
  }

  render() {
    return <AdminPageView {...this.state} {...this.props} />;
  }
}

const mapStateToProps = state => ({
  products: adminProductsSelectors.getProducts(state),
  loading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error,
  productsCount: state.products.products.length
});

const mapStateToDispatch = {
  fetchProducts: adminProductOperations.fetchProducts
};

AdminPage.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  selectedProduct: T.shape(productType),
  loading: T.bool
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AdminPage);
