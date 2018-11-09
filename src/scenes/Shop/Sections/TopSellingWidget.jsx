import React from "react";
import ProductWidget from "./components/ProductWidget";

const TopSellingWidget = ({ products }) => {
  const topProducts = products.sort((a, b) => a > b).slice(0, 3);
  return (
    <>
      <h3 className="aside-title">Top selling</h3>
      {topProducts.map(product => (
        <ProductWidget key={`top_${product.id}`} product={product} />
      ))}
    </>
  );
};

export default TopSellingWidget;
