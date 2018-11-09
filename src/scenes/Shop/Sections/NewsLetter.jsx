import React from "react";

const NewsLetter = () => {
  return (
    <div id="newsletter" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="newsletter">
              <p>
                Sign Up for the <strong>NEWSLETTER</strong>
              </p>
              <form>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="newsletter-btn">
                  <i className="fa fa-envelope" /> Subscribe
                </button>
              </form>
              <ul className="newsletter-follow">
                <li>
                  <a href="#">
                    <i className="mdi mdi-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
