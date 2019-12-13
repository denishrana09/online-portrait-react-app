import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class AppNav extends React.Component {
  render() {
    return (
      <div className="appnav">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link className="nav-link link-btn" to="/">
              Online Portrait
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fas fa-bars" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                className="btn btn-default nav-link link-btn"
                to="/about-us"
              >
                About Us
              </Link>
              <Link className="btn btn-default nav-link link-btn" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-default nav-link link-btn" to="/donate">
                Donate
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNav;
