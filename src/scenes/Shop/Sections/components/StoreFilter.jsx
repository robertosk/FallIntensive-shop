import React from "react";

const StoreFilter = () => {
  return (
    <div className="store-filter clearfix">
      <div className="store-sort">
        <label>
          Sort By:
          <select className="input-select">
            <option value="0">Popular</option>
            <option value="1">Position</option>
          </select>
        </label>

        <label>
          Show:
          <select className="input-select">
            <option value="0">20</option>
            <option value="1">50</option>
          </select>
        </label>
      </div>
      <ul className="store-grid">
        <li className="active">
          <i className="mdi mdi-grid" />
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-view-list" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StoreFilter;
