import React from "react";
class TopDonors extends React.Component {
  componentDidMount() {
    document.title = "Top Donors";
  }

  render() {
    return (
      <div className="container">
        <h1>Top Donors</h1>
      </div>
    );
  }
}
export default TopDonors;
