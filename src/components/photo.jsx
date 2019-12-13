import React from "react";
import { Redirect } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wanted: false };
    this.handleOrder = this.handleOrder.bind(this);
  }

  handleOrder() {
    this.setState({ wanted: true });
  }

  render() {
    if (this.state.wanted) {
      return <Redirect to="/contact" />;
    }
    return (
      <Modal
        className="photo"
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="row">
            <div className="col-sm-6">
              <img src={this.props.pic} alt="" />
            </div>
            <div className="col-sm-6 content-col">
              <div className="pic-dialogue">
                Want to propose your Lifeline
                <br />
                Want to Gift someone special
                <br />
                Or want your own Sketch?
              </div>
              <Button
                className="btn-link order-button"
                onClick={this.handleOrder}
              >
                Order Now <i className="fas fa-heart" />
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="close-button"
            size="sm"
            onClick={this.props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
