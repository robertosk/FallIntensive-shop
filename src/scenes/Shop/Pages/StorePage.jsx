import React from "react";
import Breadcrumb from "../Sections/components/Breadcrumb";
import NewsLetter from "../Sections/NewsLetter";
import AsidePanel from "../Sections/AsidePanel";
import StoreFilter from "../Sections/components/StoreFilter";
import _ from "lodash";
import { compose, withState, withHandlers, lifecycle } from "recompose";
import { searchProducts } from "../../../utils/search";

import SingleStoreItem from "../Sections/components/SingleStoreItem";
import { connect } from "react-redux";
import * as productsOperations from "../../../modules/products/productsOperations";
import * as productsSelectors from "../../../modules/products/productsSelectors";
import Loading from "../../../components/Loading";
import Pagination from "../Sections/components/Pagination";

const StorePage = ({
  loading,
  products,
  onAddToCart,

  pager,
  setPage,

  orderBy,
  orderType,
  doOrder,
  query,

  shownItems,
  onSetItemsCount
}) => {
  let productsToView = _.orderBy(products, orderBy, orderType);
  productsToView = searchProducts(productsToView, query);
  return (
    <>
      <Breadcrumb itemsCount={products.length} />
      <div className="section">
        <div className="container">
          <div className="row">
            <AsidePanel />

            <div id="store" className="col-md-9">
              <StoreFilter
                orderBy={orderBy}
                doOrder={doOrder}
                shownItems={shownItems}
                setItemsCount={onSetItemsCount}
              />
              {loading ? (
                <Loading />
              ) : (
                <>
                  <div className="row">
                    {productsToView.map(product => {
                      return (
                        <div key={product.id} className="col-md-4 col-xs-6">
                          <SingleStoreItem
                            product={product}
                            onAddToCart={onAddToCart}
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="store-filter">
                <Pagination
                  setPage={setPage}
                  pager={pager}
                  shownItems={shownItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
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
