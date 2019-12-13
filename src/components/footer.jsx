import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer font-small unique-color-dark">
        <div className="footer-div">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="footer-copyright col-md-5 text-center text-md-left mb-4 mb-md-0">
                © 2019 Copyright <a href="https://www.onlineportrait.in">onlineportrait.in</a>
              </div>
              <div className="col-md-7 text-center text-md-right">
                <Link className="link-content white-text" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="link-content white-text" to="/tnc">
                  <span className="link-content white-text">T&amp;C</span>
                </Link>
                <a href="https://fb.me/onlineportrait.in" rel="noopener noreferrer" target="_blank" className="fb-ic">
                  <i className="fab fa-facebook-f white-text link-content"> </i>
                </a>
                <a href="https://twitter.com/onlineportrait" rel="noopener noreferrer" target="_blank" className="tw-ic">
                  <i className="fab fa-twitter white-text link-content"> </i>
                </a>
                {/* <a href=" #" target="_blank" className="gplus-ic">
                  <i className="fab fa-google-plus-g white-text link-content">
                    {" "}
                  </i>
                </a> */}
                <a href="https://www.linkedin.com/company/onlineportrait" rel="noopener noreferrer" target="_blank" className="li-ic">
                  <i className="fab fa-linkedin-in white-text link-content">
                    {" "}
                  </i>
                </a>
                <a href="https://www.instagram.com/onlineportrait.in" rel="noopener noreferrer" target="_blank" className="ins-ic">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
