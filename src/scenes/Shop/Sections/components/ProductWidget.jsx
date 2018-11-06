import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";
import { createProduct } from "../../../../utils/creators";
import { formatRoute } from "react-router-named-routes";

const ProductWidget = ({ product = createProduct }) => {
  return (
    <div className="product-widget">
      <Link to={formatRoute(routes.product, { id: product.id })}>
        <div className="product-img">
          <img src={product.image} alt="" />
        </div>
        <div className="product-body">
          <h3 className="product-name">
            <span>{product.title}</span>
          </h3>
          <h4 className="product-price d-flex justify-content-between">
            <span className="qty">1x</span>
            <span>
              <i className="mdi mdi-currency-usd mx-0" />
              {product.price}
            </span>
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default ProductWidget;
