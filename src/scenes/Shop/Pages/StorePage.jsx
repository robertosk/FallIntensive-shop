import React from "react";
import Breadcrumb from "../Sections/components/Breadcrumb";
import NewsLetter from "../Sections/NewsLetter";
import SingleStoreItem from "../Sections/components/SingleStoreItem";
import AsidePanel from "../Sections/AsidePanel";
import StoreFilter from "../Sections/components/StoreFilter";
import Pagination from "../Sections/components/Pagination";

const StorePage = ({ products, onAddToCart, onPageChanged }) => {
  return (
    <>
      <Breadcrumb itemsCount={products.length} />
      <div className="section">
        <div className="container">
          <div className="row">
            <AsidePanel products={products} />

            <div id="store" className="col-md-9">
              <StoreFilter />
              <div className="row">
                {products.map(product => {
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
              <div className="store-filter">
                <Pagination
                  totalRecords={products.length}
                  pageLimit={6}
                  pageNeighbours={1}
                  onPageChanged={onPageChanged}
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

export default StorePage;
