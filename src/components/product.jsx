import React from "react";
import { productType } from "./common/propTypes";

const Product = ({ product }) => {
  return (
    <>
      <p>{product.title}</p>
    </>
  );
};

Product.propTypes = { product: productType };

export default Product;
