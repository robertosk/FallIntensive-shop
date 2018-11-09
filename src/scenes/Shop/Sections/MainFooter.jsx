import React from "react";
import { Link } from "react-router-dom";
import { mainNav, infoNav, serviceNav } from "../../../data/navigations";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <i className="mdi mdi-map-marker" />
                      46001 Ternopil
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-phone" />
                      +380(000)00-00-000
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-email-open-outline" />
                      email@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Categories</h3>
                <ul className="footer-links">
                  {mainNav.map((item, index) => (
                    <li key={`infoNav${index}`}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="clearfix visible-xs" />

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links">
                  {infoNav.map((item, index) => (
                    <li key={`infoNav${index}`}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="footer-links">
                  {serviceNav.map((item, index) => (
                    <li key={`srvcNav-${index}`}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom-footer" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="copyright">
                Copyright &copy;
                {new Date().getFullYear()} All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
