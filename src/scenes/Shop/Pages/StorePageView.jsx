import React from "react";
import Breadcrumb from "../Sections/components/Breadcrumb";
import NewsLetter from "../Sections/NewsLetter";
import AsidePanel from "../Sections/AsidePanel";
import StoreFilter from "../Sections/components/StoreFilter";
import _ from "lodash";
import { searchProducts } from "../../../utils/search";

import SingleStoreItem from "../Sections/components/SingleStoreItem";
import Loading from "../../../components/Loading";
import Pagination from "../Sections/components/Pagination";

const StorePageView = ({
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
                    {productsToView && productsToView.length ? (
                      productsToView.map(product => {
                        return (
                          <div key={product.id} className="col-md-4 col-xs-6">
                            <SingleStoreItem
                              product={product}
                              onAddToCart={onAddToCart}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <p>There is no items to show</p>
                    )}
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
export default StorePageView;
