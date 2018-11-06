import React, { Component } from "react";
import "../../vendor/adminTemplate/style.scss";
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
import classNames from "classnames";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProduct: createProduct(),
      loading: true,
      toggleSidebar: false
    };
    this.handleUpdateProductList = this.handleUpdateProductList.bind(this);
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }
  handleUpdateProductList(products) {
    this.setState({
      products
    });
  }
  handleToggleSidebar() {
    this.setState({ toggleSidebar: !this.state.toggleSidebar });
  }
  async componentDidMount() {
    const [productsData] = await AdminPage.fetch();

    this.setState({
      products: productsData.data,
      loading: !this.state.loading
    });
  }

  render() {
    // prettier-ignore
    let sidebar = classNames("sidebar sidebar-offcanvas",{"active": this.state.toggleSidebar });

    return (
      <div className="page-wrapper">
        <MainNav handleToggleSidebar={this.handleToggleSidebar} />
        {this.state.loading ? (
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
                    render={() => (
                      <Dashboard productsCount={this.state.products.length} />
                    )}
                  />
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
AdminPage.fetch = params => Promise.all([Api.Products.fetchProducts()]);

AdminPage.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  selectedProduct: T.shape(productType),
  loading: T.bool
};
export default AdminPage;
