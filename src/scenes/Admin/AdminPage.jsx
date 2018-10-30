import React, { Component } from "react";
import * as Api from "../../api/Api";
import { Route, Switch } from "react-router-dom";
import T from "prop-types";
import { productType } from "../../common/propTypes";
import Loading from "../../components/Loading";
import UsersListContainer from "./UsersList/UsersListContainer";
import MainNav from "./Components/AdminNav";
import AdminSideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import { routes } from "../../routes";
import Footer from "./Components/Footer";
import { createProduct } from "../../utils/creators";
import ProductPage from "./ProductPage/ProductsPage";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProduct: createProduct(),
      loading: true
    };
    this.handleUpdateProductList = this.handleUpdateProductList.bind(this);
  }
  handleUpdateProductList(products) {
    this.setState({
      products
    });
  }
  async componentDidMount() {
    const [productsData] = await AdminPage.fetch();

    this.setState({
      products: productsData.data,
      loading: !this.state.loading
    });
  }
  render() {
    return (
      <div className="page-wrapper">
        <MainNav />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="container-fluid page-body-wrapper">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <AdminSideNav />
            </nav>
            <div className="main-panel">
              <div className="content-wrapper">
                <Switch>
                  <Route path={routes.admin} exact component={Dashboard} />
                  <Route
                    path={routes.adminProductList}
                    render={renderProps => (
                      <ProductPage
                        {...renderProps}
                        products={this.state.products}
                        selectedProduct={this.state.selectedProduct}
                        handleUpdateProductList={this.handleUpdateProductList}
                      />
                    )}
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
  }
}
AdminPage.fetch = params => Promise.all([Api.AdminProducts.fetchProducts()]);

AdminPage.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  selectedProduct: T.shape(productType),
  loading: T.bool
};
export default AdminPage;