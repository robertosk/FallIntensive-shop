import React from "react";

import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import * as productsSelector from "../../../../../modules/products/productsSelectors";
import * as adminOperations from "../../../../../modules/admin/adminOperations";

import SingleProductView from "./SingleProductView";

const SingleProduct = props => {
  return <SingleProductView {...props} />;
};

const mapStateToProps = (state, props) => {
  return {
    product: productsSelector.getProduct(state, props.match.params.id)
  };
};
const mapStateToDispatch = {
  editProduct: adminOperations.editProduct,
  removeProduct: adminOperations.removeProduct
};
const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("redirect", "handleRedirect", false),
  withHandlers({
    onSubmit: props => form => {
      props.editProduct(form).then(props.handleRedirect(!props.redirect));
    }
  })
);
export default enhance(SingleProduct);
