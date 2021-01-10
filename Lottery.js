import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "lotto",
    maxBalls: 5,
    muxNum: 50
  }

  constructor(props) {
    super(props);
    this.state = {
      nums: [Array.from({length:this.props.maxBalls})]
    }
    this.generate=this.generate.bind(this);
  }

  generate() {
    this.setState(currState=> ({
      nums: currState.nums.map(num => Math.floor(Math.random() * this.props.muxNum) + 1
      )
    }))
  }

  handleclick() {
    this.generate();
  }
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(num => <Ball num={num} /> )}
        </div>
        <button onclick={this.handleclick}> Generate</button>
      </section>
    )
  }
}
export default Lottery;
