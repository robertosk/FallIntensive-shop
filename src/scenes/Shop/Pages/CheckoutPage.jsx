import React from "react";
import CartWidget from "../Sections/components/CartWidgetContainer";

const CheckoutPage = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="billing-details">
              <div className="section-title">
                <h3 className="title">Billing address</h3>
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="city"
                  placeholder="City"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="country"
                  placeholder="Country"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="zip-code"
                  placeholder="ZIP Code"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="tel"
                  name="tel"
                  placeholder="Telephone"
                />
              </div>
              <div className="form-group">
                <div className="input-checkbox">
                  <input type="checkbox" id="create-account" />
                  <label htmlFor="create-account">
                    <span />
                    Create Account?
                  </label>
                  <div className="caption">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shiping-details">
              <div className="section-title">
                <h3 className="title">Shiping address</h3>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="shiping-address" />
                <label htmlFor="shiping-address">
                  <span />
                  Ship to a diffrent address?
                </label>
                <div className="caption">
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="country"
                      placeholder="Country"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="zip-code"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="tel"
                      name="tel"
                      placeholder="Telephone"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-notes">
              <textarea className="input" placeholder="Order Notes" />
            </div>
          </div>

          <div className="col-md-5 order-details">
            <div className="section-title text-center">
              <h3 className="title">Your Order</h3>
            </div>
            <CartWidget />
            <div className="payment-method">
              <div className="input-radio">
                <input type="radio" name="payment" id="payment-1" />
                <label htmlFor="payment-1">
                  <span />
                  Direct Bank Transfer
                </label>
                <div className="caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="input-radio">
                <input type="radio" name="payment" id="payment-2" />
                <label htmlFor="payment-2">
                  <span />
                  Cheque Payment
                </label>
                <div className="caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="input-radio">
                <input type="radio" name="payment" id="payment-3" />
                <label htmlFor="payment-3">
                  <span />
                  Paypal System
                </label>
                <div className="caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                <span />
                I've read and accept the <a href="#">terms & conditions</a>
              </label>
            </div>
            <a href="#" className="primary-btn order-submit">
              Place order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
