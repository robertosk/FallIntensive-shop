import React from "react";

const Breadcrumb = ({ itemsCount }) => {
  return (
    <div id="breadcrumb" className="section ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="breadcrumb-tree">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">All Categories</a>
              </li>
              <li className="active">Phones ({itemsCount} Results)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
