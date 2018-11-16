import React from "react";
import Loading from "../../../../components/Loading";
import UserListItem from "./UserIListItem";
import RemoveModal from "./RemoveModal";

const UsersListView = ({
  loading,
  usersList,
  selectUser,
  selectedUser,
  removeModalStatus,
  toggleRemoveModal,
  submitRemoveUser,
  submitEditUser,
  changeUserRole
}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h2 className="px-4">Users List</h2>

      <div id="accordion">
        {usersList.length > 0 ? (
          usersList.map(user => (
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
