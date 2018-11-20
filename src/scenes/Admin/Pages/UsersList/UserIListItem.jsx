import React from "react";

const UserListItem = ({
  user,
  onToggleRemoveModal,
  submitEditUser,
  selectUser,
  changeUserRole
}) => {
  return (
    <div className="card">
      <div className="card-header" id={`heading-${user.id}`}>
        <div
          className="mb-0 collapsed"
          data-toggle="collapse"
          data-target={`#collapse-${user.id}`}
          aria-expanded="false"
          aria-controls={`collapse-${user.id}`}
          onClick={() => selectUser(user)}
        >
          {/* <button
            className="btn btn-link w-100 collapsed text-left"
            data-toggle="collapse"
            data-target={`#collapse-${user.id}`}
            aria-expanded="false"
            aria-controls={`collapse-${user.id}`}
            onClick={() => selectUser(user)}
          > */}
          <span className="w-100 d-flex justify-content-between ">
            <span>User Name: {`${user.firstName}  ${user.lastName}`}</span>
            <span>User Email: {user.email}</span>
            <span>Role: [{user.role}] </span>
          </span>
          {/* </button> */}
        </div>
      </div>

      <div
        id={`collapse-${user.id}`}
        className="collapse"
        aria-labelledby={`heading-${user.id}`}
        data-parent="#accordion"
      >
        <div className="card-body d-flex justify-content-between">
          <p>Role:{user.role} </p>
          <div>
            Change Role:
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.role}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  onClick={() => changeUserRole(user, "user")}
                >
                  User
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => changeUserRole(user, "admin")}
                >
                  Admin
                </a>
              </div>
            </div>
          </div>
          <div className="ticket-actions d-flex align-items-center justify-content-end just col-md-2">
            <button
              type="button"
              className="btn btn-outline-success mx-1 px-2"
              onClick={submitEditUser}
            >
              Save
            </button>

            <button
              type="button"
              className="btn btn-outline-danger mx-1 px-2"
              onClick={onToggleRemoveModal}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
