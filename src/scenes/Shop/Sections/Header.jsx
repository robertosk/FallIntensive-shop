import React from "react";
import { connect } from "react-redux";
import { routes } from "../../../routes";
import { Link } from "react-router-dom";

const Header = ({ cartItemsCount }) => {
  return (
    <header>
      <div id="header" className="py-4">
        <div className="d-flex align-items-top justify-content-between px-5">
          <div className="header-logo">
            <Link className="mr-0" to={routes.home}>
              <img src="../assets/images/logo-red.gif" alt="R Admin" />
              <h3>eacted Shop</h3>
            </Link>
          </div>
          <div className="header-search">
            <div className="search-form">
              <input className="input" placeholder="Search here" />
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className=" d-flex">
            <ul className="navbar-nav navbar-nav-right d-flex flex-row">
              <li className="mx-3 nav-item  d-none d-sm-block">
                <a className="nav-link " href="#">
                  <i className="mdi mdi-heart-outline" />
                  <br />
                  <span>Your Wishlist</span>
                </a>
              </li>
              <li className="mx-3 nav-item  ">
                <Link
                  to={{
                    pathname: routes.card,
                    state: { cartModal: true }
                  }}
                  className="nav-link count-indicator "
                >
                  <i className="mdi mdi-basket" />
                  <br />
                  <span>Your Cart</span>
                  {cartItemsCount > 0 ? (
                    <span className="count">{cartItemsCount}</span>
                  ) : (
                    undefined
                  )}
                </Link>
              </li>
              <li className="mx-3 nav-item dropdown">
                <Link className="nav-link" to={routes.login}>
                  <i className="mdi mdi-account-circle" />
                  <br />
                  <span>Login</span>
                </Link>
              </li>
              <li className="mx-3nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  id="UserDropdown"
                  href="#"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="profile-text d-none d-lg-inline-block mr-2">
                    Welcome, User Userovich !
                  </span>
                  <img
                    className="img-xs rounded-circle"
                    src="../assets/images/faces/face1.jpg"
                    alt="Profile"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown user-dropdown"
                  aria-labelledby="UserDropdown"
                >
                  <Link className="dropdown-item mt-2" to={routes.admin}>
                    Admin page
                  </Link>
                  <a className="dropdown-item ">Manage Account</a>
                  <Link className="dropdown-item" to={routes.home}>
                    Sign out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => ({
  cartItemsCount: state.cart.items.length
});

export default connect(mapStateToProps)(Header);
