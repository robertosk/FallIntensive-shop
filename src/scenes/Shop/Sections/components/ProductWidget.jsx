import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";
import { formatRoute } from "react-router-named-routes";

const ProductWidget = ({ product, removeFromCart, qtyDown, qtyUp }) => {
  if (!product) {
    return null;
  }
  return (
    <div className="product-widget">
      <Link to={formatRoute(routes.product, { id: product.id })}>
        <div className="product-img">
          <img src={product.image} alt="" />
        </div>
        <div className="product-body">
          <h3 className="product-name d-flex justify-content-between">
            <span>{product.title}</span>
            <span
              onClick={e => {
                e.preventDefault();
                return removeFromCart(product.id);
              }}
            >
              remove
            </span>
          </h3>
          <h4 className="product-price d-flex justify-content-between">
            <span className="qty">
              <button
                className="btn btn-link btn-sm"
                onClick={e => {
                  e.preventDefault();
                  return qtyDown(product);
                }}
              >
                -
              </button>
              {product.quantity}x
              <button
                className="btn btn-link btn-sm"
                onClick={e => {
                  e.preventDefault();
                  return qtyUp(product);
                }}
              >
                +
              </button>
            </span>

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
