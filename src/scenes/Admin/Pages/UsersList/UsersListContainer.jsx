import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

import * as adminOperations from "../../../../modules/admin/adminOperations";

import UsersListView from "./UsersListView";

const UserListContainer = props => {
  return <UsersListView {...props} />;
};

const mapStateToProps = state => ({
  usersList: state.admin.users,
  loading: state.admin.isLoading
});

const mapStateToDispatch = {
  removeUser: adminOperations.removeUser,
  editUserRole: adminOperations.editUserRole
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("removeModalStatus", "handleRemoveModal", false),
  withState("selectedUser", "handleSelectUser", null),
  withState("orderType", "handleOrderType", "ASC"),
  withState("orderBy", "handleOrderBy", "email"),
  withState("searchQuery", "handleSearch", ""),

  withHandlers({
    selectUser: props => user => {
      props.handleSelectUser(user);
    },
    changeUserRole: props => (user, role) => {
      user.role = role;
      props.handleSelectUser(user);
    },
    toggleRemoveModal: props => () => {
      props.handleRemoveModal(!props.removeModalStatus);
    },
    submitEditUser: props => () => {
      props.editUserRole(props.selectedUser);
    },
    submitRemoveUser: props => userId => {
      props.handleRemoveModal(!props.removeModalStatus);
      props.removeUser(userId);
    },
    doOrder: props => (orderBy, orderType) => {
      props.handleOrderBy(orderBy);
      props.handleOrderType(orderType);
    },
    doSearch: props => searchQuery => {
      props.handleSearch(searchQuery);
    }
  })
);

export default enhance(UserListContainer);
