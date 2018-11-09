import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="map">
                <iframe
                  title="map"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;z=14&amp;ll=49.547856,25.574739&amp;output=embed"
                />
              </div>
            </div>
            <div className="col-md-5">
              <p className="m_8">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat
              </p>
              <div className="address">
                <p>46001 Ternopil,</p>
                <p>Ukraine</p>
                <p>Phone:+380(000)00-00-000</p>
                <p>
                  Email: <span>email@email.com</span>
                </p>
                <p>
                  Follow on: <span>Facebook</span>, <span>Twitter</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 contact">
              <form>
                <div className="to">
                  <input type="text" className="text" value="Name" />
                  <input type="text" className="text" value="Email" />
                  <input type="text" className="text" value="Subject" />
                </div>
                <div className="text">
                  <textarea value="Message:">Message:</textarea>
                  <div className="d-flex justify-content-end">
                    <button className="primary-btn">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
