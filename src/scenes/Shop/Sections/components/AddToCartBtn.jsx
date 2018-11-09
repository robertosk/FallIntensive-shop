import React from "react";

const AddToCartBtn = ({ product, onAddToCart }) => {
  return (
    <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
      <i className="mdi mdi-cart-plus" /> Add to cart
    </button>
  );
};

export default AddToCartBtn;
