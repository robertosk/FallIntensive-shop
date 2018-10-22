import React from "react";
import T from "prop-types";
import Product from "../../components/product";
import { productType } from "../../components/common/propTypes";

const AdminPage = ({ productList }) => {
  return (
    <>
      {productList.map(pr => (
        <Product key={pr.id} product={pr} />
      ))}
    </>
  );
};

AdminPage.propTypes = {
  productList: T.arrayOf(productType).isRequired
};
export default AdminPage;
