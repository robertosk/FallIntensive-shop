import React from "react";
import { Link } from "react-router-dom";
import { mainNav } from "../../../data/navigations";
import SearchComponent from "./components/SearchComponent";

const MainNav = ({ location }) => {
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
            <i className="mdi mdi-menu" />
          </button>

          <div className="search-block  ">
            <SearchComponent location={location} />
          </div>
          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="main-nav navbar-nav mr-auto">
              {mainNav.map((item, index) => (
                <li key={`mainNav${index}`} className="nav-item">
                  <Link to={item.link} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
