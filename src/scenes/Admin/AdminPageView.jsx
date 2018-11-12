import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../routes";
import classNames from "classnames";

import T from "prop-types";
import { productType } from "../../common/propTypes";

import Loading from "../../components/Loading";
import MainNav from "./Components/AdminNav";
import AdminSideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import UsersListContainer from "./UsersList/UsersListContainer";
import ProductPage from "./ProductPage/ProductsPage";
import Footer from "./Components/Footer";

const AdminPage = ({
  toggleSidebar,
  handleToggleSidebar,
  loading,
  productsCount
}) => {
  // prettier-ignore
  let sidebar = classNames("sidebar sidebar-offcanvas",{"active": toggleSidebar });

  return (
    <div className="page-wrapper">
      <MainNav handleToggleSidebar={handleToggleSidebar} />
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
                  path={routes.admin}
                  exact
                  render={() => <Dashboard productsCount={productsCount} />}
                />
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
