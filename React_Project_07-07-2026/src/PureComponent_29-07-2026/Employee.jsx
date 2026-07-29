import React, { PureComponent } from "react";

class Employee extends PureComponent {
  render() {
    console.log("Employee Component Rendered");

    return (
      <div>
        <h2>Employee Details</h2>

        <h3>Salary : ₹{this.props.salary}</h3>
      </div>
    );
  }
}

export default Employee;