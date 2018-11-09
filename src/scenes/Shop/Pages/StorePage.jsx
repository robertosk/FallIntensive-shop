import React from "react";
import Breadcrumb from "../Sections/components/Breadcrumb";
import NewsLetter from "../Sections/NewsLetter";
import SingleStoreItem from "../Sections/components/SingleStoreItem";
import AsidePanel from "../Sections/AsidePanel";
import StoreFilter from "../Sections/components/StoreFilter";

const StorePage = ({ products, onAddToCart }) => {
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
              <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
                <ul className="store-pagination">
                  <li className="active">1</li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-chevron-right" />
                    </a>
                  </li>
                </ul>
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
