import React from "react";
import { connect } from "react-redux";
import * as productsOperations from "../../../modules/products/productsOperations";

import { compose, lifecycle } from "recompose";
import SingleItemPageView from "./SingleItemPageView";

const SingleItemPageContainer = props => {
  return <SingleItemPageView {...props} />;
};

const mapStateToProps = state => ({
  product: state.products.singleProduct,
  isLoading: state.products.isLoading
});
const mapStateToDispatch = {
  fetchProduct: productsOperations.fetchProductByID
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchProduct(this.props.match.params.id);
    }
  })
);
export default enhance(SingleItemPageContainer);
