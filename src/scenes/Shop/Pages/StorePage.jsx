import React from "react";
import Breadcrumb from "../Sections/components/Breadcrumb";
import NewsLetter from "../Sections/NewsLetter";
import AsidePanel from "../Sections/AsidePanel";
import StoreFilter from "../Sections/components/StoreFilter";
import _ from "lodash";
import { compose, withState, withHandlers } from "recompose";
import { searchProducts } from "../../../utils/search";
import ProductsGrid from "../Sections/components/ProductsGrid";

const StorePage = ({
  products,
  onAddToCart,
  orderBy,
  orderType,
  doOrder,
  query,
  shownItems,
  showItems
}) => {
  let productsToView = _.orderBy(products, orderBy, orderType);
  productsToView = searchProducts(productsToView, query);
  return (
    <>
      <Breadcrumb itemsCount={products.length} />
      <div className="section">
        <div className="container">
          <div className="row">
            <AsidePanel products={products} />

            <div id="store" className="col-md-9">
              <StoreFilter
                orderBy={orderBy}
                doOrder={doOrder}
                shownItems={shownItems}
                showItems={showItems}
              />
              <ProductsGrid
                products={productsToView}
                onAddToCart={onAddToCart}
                shownItems={shownItems}
              />
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};
const enhance = compose(
  withState("orderBy", "handleOrderBy", "title"),
  withState("orderType", "handleOrderType", "asc"),
  withState("shownItems", "handleShownItems", "9"),
  withHandlers({
    doOrder: props => (orderBy, orderType) => {
      props.handleOrderBy(orderBy);
      props.handleOrderType(orderType);
    },
    showItems: props => count => {
      props.handleShownItems(count);
    }
  })
);
export default enhance(StorePage);
