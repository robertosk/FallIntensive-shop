import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const collection = [
  {
    title: "Phone 1",
    img: "./img/shop01.png",
    link: routes.productList
  },
  {
    title: "Phone 2",
    img: "./img/shop02.png",
    link: routes.productList
  },
  {
    title: "Phone 3",
    img: "./img/shop03.png",
    link: routes.productList
  }
];

const CollectionsSection = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {collection.map((item, index) => (
            <div key={`cool_${index}`} className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    {item.title}
                    <br />
                    Collection
                  </h3>
                  <Link to={item.link} className="cta-btn">
                    Shop now <i className="fa fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;
