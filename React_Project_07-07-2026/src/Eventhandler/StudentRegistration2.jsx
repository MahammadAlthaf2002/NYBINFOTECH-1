import React, { useState } from "react";

function StudentRegistration2() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [message, setMessage] = useState("");

  const [focusField, setFocusField] = useState("");

  // onChange
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // onFocus
  const handleFocus = (e) => {
    setFocusField(e.target.name);
  };

  // onBlur
  const handleBlur = (e) => {
    if (e.target.value.trim() === "") {
      alert(`${e.target.name} is required`);
    }
    setFocusField("");
  };

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      student.name === "" ||
      student.email === "" ||
      student.course === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setMessage("Student Registered Successfully ✅");

    setStudent({
      name: "",
      email: "",
      course: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            border:
              focusField === "name"
                ? "2px solid blue"
                : "1px solid gray",
            padding: "8px",
            marginBottom: "10px",
            display: "block",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            border:
              focusField === "email"
                ? "2px solid blue"
                : "1px solid gray",
            padding: "8px",
            marginBottom: "10px",
            display: "block",
          }}
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            border:
              focusField === "course"
                ? "2px solid blue"
                : "1px solid gray",
            padding: "8px",
            marginBottom: "10px",
            display: "block",
          }}
        />

        <button type="submit">
          Register
        </button>
      </form>

      <h3>{message}</h3>

      <hr />

      <h2>Live Preview</h2>

      <p>Name : {student.name}</p>
      <p>Email : {student.email}</p>
      <p>Course : {student.course}</p>
    </div>
  );
}

export default StudentRegistration2;