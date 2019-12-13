import React from "react";
// import AppNav from "../components/navbar";
// import Footer from "../components/footer";
import Layout from '../components/Layout';
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import { REACT_GA_KEY } from "../constants";

class Donate extends React.Component {
  componentDidMount() {
    ReactGA.initialize(REACT_GA_KEY);
    ReactGA.pageview('/donate');
  }
  render() {
    return (
      <Layout>
        <div className="donate_main">
          <Helmet>
            <title>Donate for us</title>
            <meta name="description"
              content="We fulfil people's life with happiness using our Portrait, donate for us if you feel good for our work."
            />
            <meta name="og:title" property="og:title" content="Donate for us" />
            <meta name="og:title" property="og:description" content="We fulfil people's life with happiness using our Portrait, donate for us if you feel good for our work." />
            <meta name="keywords" content="onlineportrait.in, donate" />
          </Helmet>
          <div className="container donate-container">
            You can support me on Patreon on this <a rel="noopener noreferrer" href="https://www.patreon.com/onlineportrait" target="_blank">Link</a>.
          <br />
            <br />
            If you use PayTM then please use : {' '}
            <a href="https://paytm.business/link/20862/LL_11597787"
              target='_blank' rel='im-checkout noopener noreferrer' data-behaviour='remote'
              data-style='light' data-text="Pay with Paytm"
              style={{
                borderRadius: "2px", display: "inline-block", padding: "0 23px", color: "#182233", fontSize: "12px", textDecoration: "none",
                fontFamily: "'Nunito Sans', sans-serif", height: "32px", lineHeight: "28px", background: "#ffffff", border: "1px solid #e8edf4"
              }} >
              <span>Pay  with</span>
              <img alt="PayTM Logo" style={{ marginLeft: "6px", verticalAlign: "sub", width: "50px" }}
                src="https://static1.paytm.in/1.4/plogo/paytmlogo-coloured.png" />
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Donate;
