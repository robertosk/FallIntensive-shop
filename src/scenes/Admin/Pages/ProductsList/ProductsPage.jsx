import React from "react";
import { routes } from "../../../../routes";
import { Route, Switch } from "react-router-dom";
import SingleProductContainer from "./ProductPage/SingleProductContainer";
import ProductListContainer from "./ProductListContainer";

const ProductPage = ({ match, products }) => {
  return (
    <Switch>
      <Route
        path={routes.adminProduct}
        render={renderProps => <SingleProductContainer {...renderProps} />}
      />
      <Route
        path={match.path}
        render={rProps => (
          <ProductListContainer renderProps={rProps} products={products} />
        )}
      />
    </Switch>
  );
};

export default ProductPage;
