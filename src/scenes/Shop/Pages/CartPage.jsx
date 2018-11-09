import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import CartWidget from "../Sections/components/CartWidget";

const CartPage = ({ cartModal }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10  order-details">
            <div className="section-title text-center">
              <h3 className="title">Your Order</h3>
            </div>
            <CartWidget />
            <Link to={routes.cartCheckout} className="primary-btn order-submit">
              Place order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
