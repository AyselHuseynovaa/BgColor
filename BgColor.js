import React, { Component } from "react";
import "./style/style.css";

class BgColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
    };

    this.setColor1 = this.setColor1.bind(this);
    this.setColor2 = this.setColor2.bind(this);
    this.setColor3 = this.setColor3.bind(this);
  }

  setColor1() {
    this.setState({ bgColor: "slateblue" });
  }

  setColor2() {
    this.setState({ bgColor: "pink" });
  }
  setColor3() {
    this.setState({ bgColor: "purple" });
  }

  render() {
    return (
      <div className="bgcolor" style={{ backgroundColor: this.state.bgColor }}>
        <div className="bgcolor1" onMouseOver={this.setColor1}>
          Slateblue
        </div>

        <div className="bgcolor2" onMouseOver={this.setColor2}>
          Pink
        </div>
        <div className="bgcolor3" onMouseOver={this.setColor3}>
          Purple
        </div>
      </div>
    );
  }
}
export default BgColor;
