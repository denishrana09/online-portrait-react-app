import React from "react";
// import AppNav from "../components/navbar";
// import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import Layout from '../components/Layout';
import { REACT_GA_KEY } from "../constants";

class AboutUs extends React.Component {
  componentDidMount() {
    ReactGA.initialize(REACT_GA_KEY);
    ReactGA.pageview('/about-us');
  }
  render() {
    return (
      <Layout>
        <div className="about_us_main">
          <Helmet>
            <title>About Us - OnlinePortrait.in</title>
            <meta name="description"
              content="We provides Black and White and Color portrait online in Surat."
            />
            <meta name="og:title" property="og:title" content="About Us - OnlinePortrait.in" />
            <meta name="og:title" property="og:description" content="OnlinePortrait.in is a website that provides black and white and color portrait online in Surat." />
            <meta name="keywords" content="onlineportrait.in, aboutus" />
          </Helmet>
          <div className="container">
            <div className="about-content">
              We are group of people who loves Art.
            <div className="intro-about-us">We make color portraits, black and white portraits, etc.</div>
              Thanks for reaching out here.
          </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default AboutUs;
