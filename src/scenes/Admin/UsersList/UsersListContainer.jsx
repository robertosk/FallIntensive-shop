import React, { Component } from "react";

import UsersListView from "./UsersListView";

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <UsersListView {...this.props} {...this.state} />;
  }
}

export default UserListContainer;
