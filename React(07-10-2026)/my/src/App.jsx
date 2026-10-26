import { useState, useEffect } from "react";

function App() {
  // =========================
  // STATE
  // =========================

  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [course, setCourse] = useState("");
  var [students, setStudents] = useState([]);
  var [showStudents, setShowStudents] = useState(true);

  // =========================
  // useEffect
  // Component Lifecycle
  // Dependency Array
  // =========================

  useEffect(() => {
    console.log("Students component updated");

    document.title = "Students: " + students.length;

    // Cleanup function
    return function () {
      console.log("Cleanup function executed");
    };
  }, [students]);

  // =========================
  // INPUT HANDLING
  // =========================

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleCourseChange(event) {
    setCourse(event.target.value);
  }

  // =========================
  // FORM HANDLING
  // =========================

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "" || email === "" || course === "") {
      alert("Please fill all fields");
      return;
    }

    var newStudent = {
      id: Date.now(),
      name: name,
      email: email,
      course: course
    };

    setStudents([...students, newStudent]);

    // Clear inputs
    setName("");
    setEmail("");
    setCourse("");
  }

  // =========================
  // EVENT HANDLING
  // =========================

  function handleShowStudents() {
    setShowStudents(!showStudents);
  }

  function handleDelete(id) {
    var updatedStudents = students.filter(function (student) {
      return student.id !== id;
    });

    setStudents(updatedStudents);
  }

  return (
    <div className="container">

      <h1>Student Management System</h1>

      {/* =========================
          FORM
      ========================= */}

      <form onSubmit={handleSubmit}>

        <h2>Add Student</h2>

        {/* Controlled Component + Input Handling */}

        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={handleNameChange}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter student email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />
        <br />

        <select
          value={course}
          onChange={handleCourseChange}
        >
          <option value="">Select Course</option>
          <option value="React JS">React JS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML CSS">HTML & CSS</option>
        </select>

        <br />
        <br />

        <button type="submit">
          Add Student
        </button>

      </form>

      <hr />

      {/* =========================
          EVENT HANDLING
      ========================= */}

      <button onClick={handleShowStudents}>
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {/* =========================
          CONDITIONAL RENDERING
      ========================= */}

      {showStudents && (

        <div>

          <h2>Student List</h2>

          {/* Conditional Rendering */}

          {students.length === 0 ? (

            <p>No students available.</p>

          ) : (

            <div>

              {/* =========================
                  LIST RENDERING
                  map()
                  Keys
              ========================= */}

              {students.map(function (student) {

                return (

                  <div className="student-card" key={student.id}>

                    <h3>{student.name}</h3>

                    <p>
                      <strong>Email:</strong> {student.email}
                    </p>

                    <p>
                      <strong>Course:</strong> {student.course}
                    </p>

                    <button
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>

                  </div>

                );

              })}

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default App;