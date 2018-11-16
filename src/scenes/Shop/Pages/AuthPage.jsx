import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { routes } from "../../../routes";
import LoginContainer from "../Sections/Auth/LoginContainer";
import RegisterContainer from "../Sections/Auth/RegisterContainer";
import RememberContainer from "../Sections/Auth/RememberContainer";

const AuthPage = () => {
  return (
    <div className="container-fluid page-body-wrapper  auth-page">
      <div className="content-wrapper d-flex align-items-center auth  theme-one">
        <div className="row w-100 h-100">
          <div className="col-lg-4 h-100 mx-auto d-flex  flex-column">
            <div className="auto-form-wrapper">
              <Switch>
                <Route exact path={routes.login} component={LoginContainer} />
                <Route path={routes.register} component={RegisterContainer} />
                <Route path={routes.remember} component={RememberContainer} />
              </Switch>
            </div>
            <ul className="auth-footer mt-auto">
              <li>
                <Link to={routes.termsAndConditions}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to={routes.ordersAndReturns}>Orders and Returns</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
