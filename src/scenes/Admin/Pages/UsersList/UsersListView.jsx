import React from "react";
import Loading from "../../../../components/Loading";
import UserListItem from "./UserIListItem";
import RemoveModal from "./RemoveModal";

import _ from "lodash";
import { searchUser } from "../../../../utils/search";
const UsersListView = ({
  loading,
  usersList,
  selectUser,
  selectedUser,
  removeModalStatus,
  toggleRemoveModal,
  submitRemoveUser,
  submitEditUser,
  changeUserRole,
  orderType,
  orderBy,
  searchQuery,
  doOrder,
  doSearch
}) => {
  if (loading) {
    return <Loading />;
  }
  let usersToView = _.orderBy(usersList, orderBy, orderType);
  usersToView = searchUser(usersToView, searchQuery);
  return (
    <>
      <h2 className="px-4">Users List</h2>
      <div className="d-flex justify-content-between">
        <div className="input-group border border-primary">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="mdi mdi-magnify" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            value={searchQuery}
            onChange={e => doSearch(e.target.value)}
          />
        </div>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Order by {orderBy}
          </button>
          <div className="dropdown-menu">
            <a
              className="dropdown-item"
              href="#"
              onClick={e => {
                e.stopPropagation();
                doOrder("email", "asc");
              }}
            >
              Email up
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={e => {
                e.stopPropagation();
                doOrder("email", "desc");
              }}
            >
              Email down
            </a>
            <div className="dropdown-divider" />
            <a
              className="dropdown-item"
              href="#"
              onClick={e => {
                e.stopPropagation();
                doOrder("firstName", "asc");
              }}
            >
              First name up
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={e => {
                e.stopPropagation();
                doOrder("firstName", "desc");
              }}
            >
              First name down
            </a>
            <div className="dropdown-divider" />
            <a
              className="dropdown-item"
              href="#"
              onClick={e => {
                e.stopPropagation();
                doOrder("role", "asc");
              }}
            >
              Role
            </a>

            <div className="dropdown-divider" />
          </div>
        </div>
      </div>
      <div id="accordion">
        {usersToView.length > 0 ? (
          usersToView.map(user => (
            <UserListItem
              key={user.id}
              user={user}
              selectedUser={selectedUser}
              selectUser={selectUser}
              onToggleRemoveModal={toggleRemoveModal}
              changeUserRole={changeUserRole}
              submitEditUser={submitEditUser}
            />
          ))
        ) : (
          <h5>There is not items in list!</h5>
        )}
      </div>
      <RemoveModal
        modalStatus={removeModalStatus}
        selectedUser={selectedUser}
        onToggleRemoveModal={toggleRemoveModal}
        onSubmitRemove={submitRemoveUser}
      />
    </>
  );
};

export default UsersListView;
