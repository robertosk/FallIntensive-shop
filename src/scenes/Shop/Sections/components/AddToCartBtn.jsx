import React from "react";

const AddToCArtBtn = ({ product, onAddToCart }) => {
  return (
    <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
      <i className="mdi mdi-cart-plus" /> Add to cart
    </button>
  );
};

export default AddToCArtBtn;
