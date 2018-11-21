import React, { Component } from "react";
import { routes } from "../routes";
import { Route, Switch } from "react-router-dom";
import AdminPageContainer from "../scenes/Admin/AdminPageContainer";
import ShopPageContainer from "../scenes/Shop/ShopPageContainer";
import AdminRoute from "./AdminRoute";
import Page404 from "../scenes/Errors/Page404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <AdminRoute path={routes.admin} component={AdminPageContainer} />
          <Route path={routes.home} component={ShopPageContainer} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}
export default App;
