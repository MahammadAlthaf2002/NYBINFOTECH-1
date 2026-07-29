import React, { Component } from "react";
import Student from "./Student";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h2>Count : {this.state.count}</h2>

        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          Increment
        </button>

        <Student name="Althaf" course="React JS" />
      </div>
    );
  }
}

export default Parent;