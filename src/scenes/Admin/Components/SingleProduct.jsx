import React from "react";

const SingleProduct = ({ products, match: { params } }) => {
  const product = products.find(p => p.id === params.id);
  return (
    <>
      <h1>single product</h1>
      <p>{product.title}</p>
    </>
  );
};

export default SingleProduct;
