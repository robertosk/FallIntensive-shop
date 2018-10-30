import React from "react";
import Loading from "../../../components/Loading";

const UsersListView = ({ loading }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h2 className="px-4">Users List</h2>
      <p>List is empty</p>
    </>
  );
};

export default UsersListView;
