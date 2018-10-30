import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const AdminSideNav = () => {
  return (
    <ul className="nav">
      <li className="nav-item nav-profile">
        <div className="nav-link">
          <div className="user-wrapper">
            <div className="profile-image">
              <img src="../assets/images/faces/face1.jpg" alt="profile" />
            </div>
            <div className="text-wrapper">
              <p className="profile-name">Admin Adminovich</p>
              <div>
                <small className="designation text-muted">Manager</small>
                <span className="status-indicator online" />
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <Link to={routes.admin} className="nav-link">
          <i className="menu-icon mdi mdi-television" />
          <span className="menu-title">Dashboard</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to={routes.adminProductList} className="nav-link">
          <i className="menu-icon mdi mdi-cellphone" />
          <span className="menu-title">Products</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={routes.adminUsersList} className="nav-link">
          <i className="menu-icon mdi mdi-account-multiple" />
          <span className="menu-title">Users</span>
        </Link>
      </li>
    </ul>
  );
};

export default AdminSideNav;
