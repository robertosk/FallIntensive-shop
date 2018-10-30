import React, { Component } from "react";
import { routes } from "../routes";
import { Route, Switch } from "react-router-dom";
import { products } from "../data/products";
import AdminPage from "../scenes/Admin/AdminPage";
import HomePage from "../scenes/HomePage";
import LoginPage from "../scenes/Auth/Login";
import Page404 from "../scenes/Errors/Page404";
//import Page500 from "../scenes/Errors/Page500";

const getProducts = async () => products;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  async componentDidMount() {
    const prList = await getProducts();
    this.setState({ products: prList });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path={routes.home}
            exact
            render={renderProps => (
              <HomePage productList={this.state.products} {...renderProps} />
            )}
          />
          <Route
            path={routes.admin}
            render={renderProps => (
              <AdminPage productList={this.state.products} {...renderProps} />
            )}
          />
          <Route path={routes.login} component={LoginPage} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
