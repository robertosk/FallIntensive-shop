import React from "react";
import { compose, withState, withHandlers, lifecycle } from "recompose";
import { connect } from "react-redux";
import * as productsOperations from "../../../modules/products/productsOperations";
import * as productsSelectors from "../../../modules/products/productsSelectors";
import StorePageView from "./StorePageView";

const StorePage = props => {
  return <StorePageView {...props} />;
};
const mapStateToProps = state => ({
  products: productsSelectors.getProducts(state),
  loading: state.products.productsPagination.loading,
  shownItems: state.products.productsPagination.pageSize,
  pager: state.products.productsPagination
});

const mapStateToDispatch = {
  initPagination: productsOperations.initPagination,
  setPage: productsOperations.setPage,
  setItemsCount: productsOperations.setItemsCount
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  lifecycle({
    componentDidMount() {
      this.props.setPage(1, this.props.shownItems);
      this.props.initPagination();
    }
  }),
  withState("orderBy", "handleOrderBy", "title"),
  withState("orderType", "handleOrderType", "asc"),

  withHandlers({
    onSetItemsCount: props => count => {
      props.setItemsCount(count);
      props.setPage(1, count);
    },
    doOrder: props => (orderBy, orderType) => {
      props.handleOrderBy(orderBy);
      props.handleOrderType(orderType);
    }
  })
);
export default enhance(StorePage);
