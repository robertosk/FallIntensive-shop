import React, { Component } from "react";
import { routes } from "../routes";
import { Route, Switch } from "react-router-dom";
import AdminPage from "../scenes/Admin/AdminPage";
import ShopPageContainer from "../scenes/Shop/ShopPageContainer";
import LoginPage from "../scenes/Auth/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={routes.admin} component={AdminPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.home} component={ShopPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
