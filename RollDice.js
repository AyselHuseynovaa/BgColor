import React, { Component } from "react";

class RollDice extends Component {
  static defaultProps = {
    options: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: "one",
      dice2: "one",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
   let idx1=Math.floor(Math.random()*this.props.options.length)
   let newDice1=this.props.options[idx1]
   let idx2=Math.floor(Math.random()*this.props.options.length)
   let newDice2=this.props.options[idx2]
    this.setState({
      dice1:newDice1,
      dice2:newDice2,
      rolling: true,
    })
}

  render() {
    return (
      <div>
        <div>
          {this.state.dice1}
          {this.state.dice2}
        </div>

        <button onclick={this.roll}>
          {this.state.rolling? "Rolling" : "Roll dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
