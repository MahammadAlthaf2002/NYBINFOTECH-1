import React, { Component } from "react";
import Employee from "./Employee";

class ParentEmpolyee extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      salary: 30000,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  increaseSalary = () => {
    this.setState({
      salary: this.state.salary + 5000,
    });
  };

  render() {
    console.log("Parent Component Rendered");

    return (
      <div>
        <h2>Parent Component</h2>

        <h3>Count : {this.state.count}</h3>
        <h3>Salary : ₹{this.state.salary}</h3>

        <button onClick={this.increaseCount}>
          Increase Count
        </button>

        <button onClick={this.increaseSalary}>
          Increase Salary
        </button>

        <hr />

        <Employee salary={this.state.salary} />
      </div>
    );
  }
}

export default ParentEmpolyee;