import React from "react";
import { Link } from "react-router-dom";
// import AppNav from "../components/navbar";
// import Footer from "../components/footer";
import Layout from '../components/Layout';
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import { REACT_GA_KEY } from "../constants";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      feedback: "",
      submitted: true,
      formEmailSent: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCross = this.handleCross.bind(this);
  }

  componentDidMount() {
    ReactGA.initialize(REACT_GA_KEY);
    ReactGA.pageview('/contact');
  }

  handleCross() {
    this.setState({ formEmailSent: false });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.name.length === 0 ||
      this.state.email.length === 0 ||
      this.state.feedback.length === 0
    ) {
      this.setState({ empty: true });
      this.setState({ formEmailSent: false });
    } else {
      const message = `${this.state.email} sent message: ${
        this.state.feedback
        }`;
      window.emailjs
        .send("gmail", "template_hpHYMjlV", {
          from_name: this.state.name,
          message_html: message,
          reply_to: ""
        })
        .then(res => {
          this.setState({ formEmailSent: true });
        })
        .catch(err => {
          this.setState({ submitted: false });
          console.error("Failed to send feedback. Error: ", err);
        });
      this.setState({
        submitted: true,
        empty: false
      });
    }
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Contact Us - Just text us on Whatsapp or Email us for contact.</title>
          <meta name="description"
            content="Reach us on Whatsapp number or Email us, as simple as that. Just try contact onlineportrait.in and we will deliver your portrait."
          />
          <meta name="og:title" property="og:title" content="Contact Us - Just text us on Whatsapp or Email us for contact." />
          <meta name="og:title" property="og:description" content="Reach us on Whatsapp number or Email us, as simple as that. Just try contact onlineportrait.in and we will deliver your portrait." />
          <meta name="keywords" content="onlineportait.in, contactus, contact" />
        </Helmet>
        <div className="container contact-container">
          <div className="mobile-number">
            Whatsapp me on <a href="https://wa.me/916356114244">Mobile Number</a> for your Order or for any question.
          </div>
          {this.state.formEmailSent && (
            <div className="alert alert-success" role="alert">
              We will contact you soon.
              <button
                onClick={this.handleCross}
                className="float-right close-button"
              >
                x
              </button>
            </div>
          )}
          {this.state.empty && (
            <div className="alert alert-danger" role="alert">
              Empty Fields are not allowed!
            </div>
          )}
          {!this.state.submitted && (
            <div className="alert alert-danger" role="alert">
              Something went wrong!
            </div>
          )}
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                aria-describedby="personName"
                onChange={this.handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <textarea
                className="form-control"
                rows="5"
                id="inputMessage"
                name="feedback"
                onChange={this.handleChange}
                placeholder="You can tell what kind of Portrait you want or give us a feedback."
                value={this.state.feedback}
              />
            </div>
            <input type="submit" value="Submit" className="btn submit-btn" />
            <Link className="btn cancel-button" to="/">
              Cancel
            </Link>
          </form>
        </div>
        <br />
      </Layout>
    );
  }
}
export default Contact;
