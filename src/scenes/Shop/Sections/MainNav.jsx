import React from "react";
import { routes } from "../../../routes";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md " id="navigation">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="main-nav navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={routes.productList} className="nav-link">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Laptops
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Smartphones
                </a>
              </li>
              <li className="nav-item">
                <Link to={routes.about} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
