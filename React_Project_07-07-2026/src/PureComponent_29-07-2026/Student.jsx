import React, { PureComponent } from "react";

class Student extends PureComponent {
  render() {
    console.log("Student Render");

    return (
      <div>
        <h3>Name : {this.props.name}</h3>
        <h3>Course : {this.props.course}</h3>
      </div>
    );
  }
}

export default Student;