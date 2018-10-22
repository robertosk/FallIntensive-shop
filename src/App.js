import React, { Component } from "react";
import { routes } from "./routes";
import { Route } from "react-router-dom";
import { products } from "./data/products";
import MainNav from "./components/mainNav";
import AdminPage from "./scenes/admin/admin";
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
        <MainNav />
        <Route
          path={routes.admin}
          render={renderProps => (
            <AdminPage productList={this.state.products} {...renderProps} />
          )}
        />
      </div>
    );
  }
}

export default App;
