import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import PrivacyPolicy from "./pages/privacy-policy";
import TnC from "./pages/tnc";
import TopDonors from "./pages/top-donors";
import NotFound from "./pages/not-found";
import "./style/main.css";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/donate" component={Donate} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/tnc" component={TnC} />
      <Route path="/top-donors" component={TopDonors} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
