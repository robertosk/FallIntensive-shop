import React from "react";
import "../../vendor/shopTemplate/style.scss";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../routes";

import Loading from "../../components/Loading";
import HomePage from "./Pages/HomePage";
import Store from "./Pages/StorePage";
import SingleItemPage from "./Pages/SingleItemPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import AboutPage from "./Pages/AboutPage";
import Page404 from "../Errors/Page404";

import MainNav from "./Sections/MainNav";
import Header from "./Sections/Header";
import Footer from "./Sections/MainFooter";
import CartModal from "./Sections/components/CartModal";
import TermsPage from "./Pages/TermsPage";
import PrivacyPolicePage from "./Pages/PrivacyPolicePage";
import ContactUsPage from "./Pages/ContactUsPage";
import OrdersAndReturnsPage from "./Pages/OrdersAndReturnsPage";
import UserPage from "./Pages/UserPage";
import WishListPage from "./Pages/WishListPage";

const ShopPageView = ({
  match,
  products,
  addToCart,
  history,
  isLoading,
  isError,
  error,
  location,
  previousLocation
}) => {
  let cartModal = !!(
    location.state &&
    location.state.cartModal &&
    previousLocation !== location
  );
  function toggleCartModal(e) {
    e.stopPropagation();
    history.goBack();
  }
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <>
        <h1>Error</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <MainNav />
      <main>
        <Switch location={cartModal ? previousLocation : location}>
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
            render={renderProps => (
              <SingleItemPage
                {...renderProps}
                products={products}
                onAddToCart={addToCart}
              />
            )}
          />
          <Route exact path={routes.card} component={CartPage} />
          <Route path={routes.cartCheckout} component={CheckoutPage} />
          <Route path={routes.termsAndConditions} component={TermsPage} />
          <Route path={routes.privacyPolicy} component={PrivacyPolicePage} />
          <Route path={routes.contactUs} component={ContactUsPage} />
          <Route path={routes.userAccount} component={UserPage} />
          <Route path={routes.wishList} component={WishListPage} />
          <Route
            path={routes.ordersAndReturns}
            component={OrdersAndReturnsPage}
          />
          <Route
            path={routes.about}
            render={renderProps => <AboutPage {...renderProps} />}
          />
          <Route path="*" component={Page404} />
        </Switch>
        {cartModal ? (
          <Route
            path={routes.card}
            render={props => (
              <CartModal
                cartModal={cartModal}
                toggleCartModal={toggleCartModal}
              />
            )}
          />
        ) : null}
      </main>

      <Footer />
    </>
  );
};

export default ShopPageView;
