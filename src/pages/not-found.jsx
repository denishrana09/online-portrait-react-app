import React from "react";
import { Redirect } from "react-router-dom";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container not-found-content">
        <h1>404</h1>
        <p className="text-muted">
          The page you are looking for was not found.
        </p>
        <button className="btn btn-link" onClick={this.handleClick}>
          Back to Home
        </button>
      </div>
    );
  }
}

export default NotFound;
