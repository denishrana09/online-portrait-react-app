import React from "react";
// import AppNav from "./components/navbar";
import Showcase from "./components/showcase";
// import Footer from "./components/footer";
import "./App.css";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import Layout from './components/Layout';
import { REACT_GA_KEY } from "./constants";

class App extends React.Component {
  initializeReactGA() {
    ReactGA.initialize(REACT_GA_KEY);
    ReactGA.pageview('/homepage');
  }
  componentDidMount() {
    this.initializeReactGA();
  }
  render() {
    return (
      <Layout>
        <div className="App">
          <Helmet>
            <title>Home - Get Your Online Portrait Now!</title>
            <meta name="description"
              content="The only site that gives Online Portrait in Surat. Start ordering your portrait if you are in surat."
            />
            <meta name="og:title" property="og:title" content="Home - Get Online Portrati Now! Order Black and white or Color Portrait. Only place for getting Online Portrait in Surat." />
            <meta name="og:title" property="og:description" content="The only site that gives online portrait in Surat.Start ordering your portrait if you are in surat." />
            <meta name="keywords" content="art, portrait, online portrait" />
            <link rel="icon" type="image/png" href="favicon.png" sizes="16x16" />
          </Helmet>
          <Showcase />
        </div>
      </Layout>
    );
  }
}

export default App;
