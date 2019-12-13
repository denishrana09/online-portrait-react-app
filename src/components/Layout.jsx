import React from "react";
import AppNav from "./navbar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <AppNav />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
