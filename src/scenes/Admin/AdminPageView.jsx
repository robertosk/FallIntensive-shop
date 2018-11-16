import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../routes";
import classNames from "classnames";
import T from "prop-types";
import { productType } from "../../common/propTypes";

import Loading from "../../components/Loading";
import MainNav from "./Components/AdminNav";
import AdminSideNav from "./Components/SideNav";

import Dashboard from "./Pages/Dashboard/Dashboard";
import UsersListContainer from "./Pages/UsersList/UsersListContainer";
import ProductPage from "./Pages/ProductsList/ProductsPage";
import Footer from "./Components/Footer";

const AdminPage = ({
  toggleSidebar,
  onToggleSidebar,
  loading,
  productsCount,
  usersCount,
  currentUser
}) => {
  // prettier-ignore
  let sidebar = classNames("sidebar sidebar-offcanvas",{"active": toggleSidebar });

  return (
    <div className="page-wrapper">
      <MainNav onToggleSidebar={onToggleSidebar} />
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid page-body-wrapper">
          <nav className={sidebar} id="sidebar">
            <AdminSideNav />
          </nav>
          <div className="main-panel">
            <div className="content-wrapper">
              <Switch>
                <Route
                  path={routes.adminProductList}
                  render={renderProps => <ProductPage {...renderProps} />}
                />
                <Route
                  path={routes.adminUsersList}
                  render={renderProps => (
                    <UsersListContainer {...renderProps} />
                  )}
                />
                <Route
                  path={routes.admin}
                  render={() => (
                    <Dashboard
                      productsCount={productsCount}
                      usersCount={usersCount}
                    />
                  )}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

AdminPage.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  loading: T.bool
};
export default AdminPage;
