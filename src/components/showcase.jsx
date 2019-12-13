import React from "react";
import MyVerticallyCenteredModal from "./photo";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.jpg";
import img9 from "../images/9.png";

class Showcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, pic: "" };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let modalImage = img1;
    switch (this.state.pic) {
      case "1":
        modalImage = img1;
        break;
      case "2":
        modalImage = img2;
        break;
      case "3":
        modalImage = img3;
        break;
      case "4":
        modalImage = img4;
        break;
      case "5":
        modalImage = img5;
        break;
      case "6":
        modalImage = img6;
        break;
      case "7":
        modalImage = img7;
        break;
      case "8":
        modalImage = img8;
        break;
      case "9":
        modalImage = img9;
        break;
      default:
        break;
    }
    return (
      <div
        className="showcase-container clearfix"
        style={{ marginTop: "10px" }}
      >
        <div className="showcase">
          <figure>
            <div className="imageBox">
              <img
                alt="Shraddha Kapoor"
                className="smallerRatio"
                src={img1}
                onClick={() => this.setState({ modalShow: true, pic: "1" })}
              />
            </div>
            <div
              className="image-info"
              onClick={() => this.setState({ modalShow: true, pic: "1" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="Samantha Akkineni"
                className="smallerRatio"
                src={img2}
                onClick={() => this.setState({ modalShow: true, pic: "2" })}
              />
            </div>
            <div
              className="image-info samantha-img"
              onClick={() => this.setState({ modalShow: true, pic: "2" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="Shahrukh Khan"
                className="smallerRatio"
                src={img3}
                onClick={() => this.setState({ modalShow: true, pic: "3" })}
              />
            </div>
            <div
              className="image-info"
              onClick={() => this.setState({ modalShow: true, pic: "3" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="Captain America"
                className="smallerRatio"
                src={img4}
                onClick={() => this.setState({ modalShow: true, pic: "4" })}
              />
            </div>
            <div
              className="image-info"
              onClick={() => this.setState({ modalShow: true, pic: "4" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="Alia Bhatt"
                className="smallerRatio"
                src={img5}
                onClick={() => this.setState({ modalShow: true, pic: "5" })}
              />
            </div>
            <div
              className="image-info"
              onClick={() => this.setState({ modalShow: true, pic: "5" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="The Little Mermaid"
                className="smallerRatio"
                src={img6}
                onClick={() => this.setState({ modalShow: true, pic: "6" })}
              />
            </div>
            <div
              className="image-info"
              onClick={() => this.setState({ modalShow: true, pic: "6" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="Neha Kakkar"
                className="smallerRatio"
                src={img7}
                onClick={() => this.setState({ modalShow: true, pic: "7" })}
              />
            </div>
            <div
              className="image-info neha-img"
              onClick={() => this.setState({ modalShow: true, pic: "7" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="Cute Little Girl"
                className="smallerRatio"
                src={img8}
                onClick={() => this.setState({ modalShow: true, pic: "8" })}
              />
            </div>
            <div
              className="image-info"
              onClick={() => this.setState({ modalShow: true, pic: "8" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
          <figure>
            <div className="imageBox">
              <img
                alt="Alia Bhatt"
                className="smallerRatio"
                src={img9}
                onClick={() => this.setState({ modalShow: true, pic: "9" })}
              />
            </div>
            <div
              className="image-info"
              onClick={() => this.setState({ modalShow: true, pic: "9" })}
            >
              <i className="fas fa-info-circle"></i> click for more info
            </div>
          </figure>
        </div>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          pic={modalImage}
          onHide={modalClose}
        />
      </div>
    );
  }
}

export default Showcase;
