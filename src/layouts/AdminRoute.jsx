import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../routes";

const AdminRoute = ({ currentUser, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        currentUser.role === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  currentUser: state.app.currentUser
});
export default connect(mapStateToProps)(AdminRoute);
