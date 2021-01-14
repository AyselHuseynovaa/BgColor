import React, { Component } from "react";
import "./style//Formstyle.css";

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.andleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="AppContainer">
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit} className="Form">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            type="password"
          />

          <label htmlFor="male">Male</label>
          <input
            name="gender"
            type="radio"
            type="radio"
            id="male"
            value={this.state.gender}
            onChange={this.handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            name="gender"
            type="radio"
            id="female"
            value={this.state.gender}
            onChange={this.handleChange}
          />

          <label>Comment:</label>

          <textarea
            name="text"
            value={this.state.value}
            onChange={this.handleChange}
            style={{ width: "200px", height: "100px" }}
          />

          <label>Topic</label>

          <select
            name="select"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="html">Html</option>
            <option value="css">Css</option>
            <option value="javascript">Javascript</option>
            <option value="react"> React </option>
          </select>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default FormList;
