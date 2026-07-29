import React from "react";

function Student2({ name, course }) {
  console.log("Student Render");

  return (
    <div>
      <h2>Student Details</h2>

      <h3>Name : {name}</h3>

      <h3>Course : {course}</h3>
    </div>
  );
}

export default React.memo(Student2);