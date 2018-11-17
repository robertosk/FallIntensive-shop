import React from "react";
import { compose, withState, withHandlers } from "recompose";
import SingleStoreItem from "./SingleStoreItem";
import Pagination from "./Pagination";

const ProductsGrid = ({
  products,
  onAddToCart,
  pageOfItems,
  onChangePage,
  shownItems
}) => {
  return (
    <>
      <div className="row">
        {pageOfItems.map(product => {
          return (
            <div key={product.id} className="col-md-4 col-xs-6">
              <SingleStoreItem product={product} onAddToCart={onAddToCart} />
            </div>
          );
        })}
      </div>
      <div className="store-filter">
        <Pagination
          items={products}
          onChangePage={onChangePage}
          pageSize={shownItems}
        />
      </div>
    </>
  );
};
const enhance = compose(
  withState("pageOfItems", "handlePageOfItems", []),
  withHandlers({
    onChangePage: props => pageOfItems => {
      props.handlePageOfItems(pageOfItems);
    }
  })
);
export default enhance(ProductsGrid);
