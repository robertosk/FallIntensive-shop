import React from "react";
import { connect } from "react-redux";
import "../../vendor/adminTemplate/style.scss";

import { compose, withState, withHandlers, lifecycle } from "recompose";

import * as adminOperations from "../../modules/admin/adminOperations";

import AdminPageView from "./AdminPageView";

const AdminPage = props => {
  return <AdminPageView {...props} />;
};

const mapStateToProps = state => ({
  loading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error,
  productsCount: state.admin.products.length,
  usersCount: state.admin.users.length,
  currentUser: state.app.currentUser
});

const mapStateToDispatch = {
  fetchProducts: adminOperations.fetchProducts,
  fetchUsers: adminOperations.fetchUsers
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("toggleSidebar", "handleSidebar", false),
  withHandlers({
    onToggleSidebar: props => () => {
      props.handleSidebar(!props.toggleSidebar);
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchProducts();
      this.props.fetchUsers();
    }
  })
);
export default enhance(AdminPage);
