import React from "react";
import "../../vendor/shopTemplate/style.scss";
import { connect } from "react-redux";
import { compose, withState, withHandlers, lifecycle } from "recompose";

import * as productOperations from "../../modules/products/productsOperations";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as cartActions from "../../modules/cart/cartActions";

import ShopPageView from "./ShopPageView";

const ShopPage = props => {
  let cartModal = !!(
    props.location.state &&
    props.location.state.cartModal &&
    props.previousLocation !== props.location
  );
  return <ShopPageView cartModal={cartModal} {...props} />;
};

const mapStateToProps = state => ({
  products: productsSelectors.getProducts(state),
  isLoading: state.app.isLoading,
  isError: !!state.products.error,
  error: state.products.error
});

const mapStateToDispatch = {
  initPagination: productOperations.initPagination,
  addToCart: cartActions.add
};
const enhance = compose(
  withState("previousLocation", "handleLocation", null),
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withHandlers({
    onHandleLocation: props => location => {
      props.handleLocation(location);
    },
    closeCartModal: props => e => {
      e.stopPropagation();
      props.history.goBack();
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.onHandleLocation(this.props.location);
    },

    componentWillUpdate(props) {
      let { location } = props;
      if (
        props.history.action !== "POP" &&
        (!location.state || !location.state.cartModal)
      ) {
        props.handleLocation(location);
      }
    }
  })
);

export default enhance(ShopPage);
