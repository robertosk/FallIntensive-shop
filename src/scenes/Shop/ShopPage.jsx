import React, { Component } from "react";
import "../../vendor/shopTemplate/style.scss";
import { connect } from "react-redux";
import * as productOperations from "../../modules/products/productsOperations";
import * as cartActions from "../../modules/cart/cartActions";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../routes";

import MainNav from "./Sections/MainNav";
import Header from "./Sections/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Sections/MainFooter";
import Store from "./Pages/StorePage";
import AboutPage from "./Pages/About";
import Loading from "../../components/Loading";
import SingleItemPage from "./Pages/SingleItemPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { match, products, addToCart } = this.props;

    if (this.props.isLoading) {
      return <Loading />;
    }
    if (this.props.isError) {
      return (
        <>
          <h1>Error</h1>
          <p>{this.props.error}</p>
        </>
      );
    }
    return (
      <>
        <Header />
        <MainNav />
        <main>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              render={renderProps => (
                <HomePage
                  {...renderProps}
                  products={products}
                  onAddToCart={addToCart}
                />
              )}
            />
            <Route
              exact
              path={routes.productList}
              render={renderProps => (
                <Store
                  {...renderProps}
                  products={products}
                  onAddToCart={addToCart}
                />
              )}
            />
            <Route
              path={routes.product}
              render={renderProps => <SingleItemPage {...renderProps} />}
            />
            <Route exact path={routes.card} component={CartPage} />
            <Route path={routes.cartCheckout} component={CheckoutPage} />
            <Route
              path={routes.about}
              render={renderProps => <AboutPage {...renderProps} />}
            />
          </Switch>
        </main>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  error: !!state.products.error
});

const mapStateToDispatch = {
  fetchProducts: productOperations.fetchProducts,
  addToCart: cartActions.add
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ShopPage);
