import React from "react";
// import AppNav from "../components/navbar";
// import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';
class TnC extends React.Component {
  render() {
    return (
      <Layout>
        <div className="tnc_main">
          <Helmet>
            <title>Terms and Conditions</title>
            <meta name="description"
              content="Give money after you receive your portrait. so order online portrait right now from the website. we deliver portrait only in surat."
            />
            <meta name="og:title" property="og:title" content="Terms and Conditions" />
            <meta name="og:title" property="og:description" content="Give money after you receive your portrait. so order online portrait right now from the website. we deliver portrait only in surat." />
            <meta name="keywords" content="art, portrait, online portrait" />
          </Helmet>
          <div className="container tnc">
            <h1>Terms and Conditions of onlineportrait.in</h1>

            <p>
              We provide this service only in Surat(Gujarat, India) Location. So do not order if you are not in Surat.
          </p>

            <p>
              We will send you screenshot of your product before delivery. So that you can tell us if any changes you want.
              You have to do payment when you receive the portrait, so don't worry about payment.
        </p>
          </div>
        </div >
      </Layout>
    );
  }
}
export default TnC;
