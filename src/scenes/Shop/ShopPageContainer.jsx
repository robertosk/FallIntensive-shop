import React, { Component } from "react";
import "../../vendor/shopTemplate/style.scss";
import { connect } from "react-redux";

import * as productOperations from "../../modules/products/productsOperations";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as cartActions from "../../modules/cart/cartActions";

import ShopPageView from "./ShopPageView";

class ShopPage extends Component {
  previousLocation = this.props.location;
  componentDidMount() {
    this.props.fetchProducts();
  }
  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.cartModal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    return <ShopPageView {...this.props} {...this.state} />;
  }
}

const mapStateToProps = state => ({
  products: productsSelectors.getProducts(state),
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error
});

const mapStateToDispatch = {
  fetchProducts: productOperations.fetchProducts,
  addToCart: cartActions.add
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ShopPage);
