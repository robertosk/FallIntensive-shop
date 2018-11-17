import React from "react";
import { Link } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { routes } from "../../../../routes";
import { createProduct } from "../../../../utils/creators";
import AddToCartBtn from "./AddToCartBtn";

const SingleStoreItem = ({ product = createProduct, onAddToCart }) => {
  return (
    <div className="product">
      <div className="product-img">
        <img
          src={product.image ? product.image : "./assets/phone_clipart.jpg"}
          alt=""
        />
        {false && (
          <div className="product-label">
            <span className="sale">-30%</span>
            <span className="new">NEW</span>
          </div>
        )}
      </div>
      <div className="product-body">
        <p className="product-category">Category</p>
        <h3 className="product-name ellipsis" title={product.title}>
          <Link to={formatRoute(routes.product, { id: product.id })}>
            {product.title}
          </Link>
        </h3>
        <h4 className="product-price">
          ${product.price}
          {false && <del className="product-old-price">$990.00</del>}
        </h4>

        <div className="product-btns">
          <button className="add-to-wishlist">
            <i className="mdi mdi-heart-outline" />
            <span className="tooltipp">Add to wishlist</span>
          </button>

          <Link to={formatRoute(routes.product, { id: product.id })}>
            <i className="mdi mdi-eye" />
            <span className="tooltipp">Quick view</span>
          </Link>
        </div>
      </div>
      <div className="add-to-cart">
        <AddToCartBtn product={product} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default SingleStoreItem;
