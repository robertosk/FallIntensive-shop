import React, { Component } from "react";
import { routes } from "../routes";
import { Route, Switch } from "react-router-dom";
import AdminPage from "../scenes/Admin/AdminPage";
import ShopPage from "../scenes/Shop/ShopPage";
import LoginPage from "../scenes/Auth/Login";
import Page404 from "../scenes/Errors/Page404";
//import Page500 from "../scenes/Errors/Page500";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={routes.admin} component={AdminPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.home} component={ShopPage} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
