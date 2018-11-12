import React from "react";
import { routes } from "../../../routes";
import { Route, Switch } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";
import ProductListContainer from "./ProductListContainer";

const ProductPage = ({ match, products }) => {
  return (
    <Switch>
      <Route
        path={match.path}
        exact
        render={rProps => (
          <ProductListContainer renderProps={rProps} products={products} />
        )}
      />

      <Route
        path={routes.adminProduct}
        render={renderProps => (
          <SingleProduct {...renderProps} products={products} />
        )}
      />
    </Switch>
  );
};

export default ProductPage;
