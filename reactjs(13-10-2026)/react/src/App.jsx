
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStudents } from "./context/StudentContext";

import {
  increment,
  decrement,
  incrementByAmount,
  resetCounter,
} from "./redux/counterSlice";

function App() {
  const { state, dispatch: studentDispatch } = useStudents();

  const counter = useSelector((state) => state.counter.value);
  const reduxDispatch = useDispatch();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [amount, setAmount] = useState(5);

  const students = state.students;

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !course.trim() || marks === "") {
      alert("Please fill in all fields.");
      return;
    }

    const numericMarks = Number(marks);

    if (
      !Number.isFinite(numericMarks) ||
      numericMarks < 0 ||
      numericMarks > 100
    ) {
      alert("Marks must be between 0 and 100.");
      return;
    }

    const studentData = {
      name: name.trim(),
      course: course.trim(),
      marks: numericMarks,
    };

    if (editId !== null) {
      studentDispatch({
        type: "UPDATE_STUDENT",
        payload: { id: editId, ...studentData },
      });
    } else {
      studentDispatch({
        type: "ADD_STUDENT",
        payload: { id: Date.now(), ...studentData },
      });
    }

    resetForm();
  }

  function resetForm() {
    setName("");
    setCourse("");
    setMarks("");
    setEditId(null);
  }

  function handleEdit(student) {
    setName(student.name);
    setCourse(student.course);
    setMarks(String(student.marks));
    setEditId(student.id);
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this student?")) {
      studentDispatch({
        type: "DELETE_STUDENT",
        payload: id,
      });
    }
  }

  return (
    <main className="container">
      <header className="page-header">
        <p className="eyebrow">REACT PRACTICE PROJECT</p>
        <h1>Student Management Dashboard</h1>
        <p>Manage students and practice React state management.</p>
      </header>

      <section className="summary-grid">
        <article className="summary-card">
          <span>Total Students</span>
          <strong>{students.length}</strong>
        </article>

        <article className="summary-card">
          <span>Average Marks</span>
          <strong>
            {students.length
              ? (
                  students.reduce(
                    (total, student) => total + student.marks,
                    0
                  ) / students.length
                ).toFixed(1)
              : "0.0"}
          </strong>
        </article>

        <article className="summary-card">
          <span>State Management</span>
          <strong>React + Redux</strong>
        </article>
      </section>

      <section className="panel">
        <h2>{editId !== null ? "Edit Student" : "Add Student"}</h2>

        <form className="student-form" onSubmit={handleSubmit}>
          <label>
            Student Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter student name"
            />
          </label>

          <label>
            Course
            <input
              type="text"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
              placeholder="Enter course"
            />
          </label>

          <label>
            Marks (0–100)
            <input
              type="number"
              min="0"
              max="100"
              value={marks}
              onChange={(event) => setMarks(event.target.value)}
              placeholder="Enter marks"
            />
          </label>

          <div className="form-actions">
            <button type="submit">
              {editId !== null ? "Update Student" : "Add Student"}
            </button>

            {editId !== null && (
              <button
                type="button"
                className="secondary-button"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="section-heading">
          <div>
            <h2>Student List</h2>
            <p>Search, edit, or delete student records.</p>
          </div>

          <input
            className="search-input"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name or course..."
          />
        </div>

        {state.error && <p className="error-message">{state.error}</p>}

        {state.loading ? (
          <p>Loading students...</p>
        ) : filteredStudents.length === 0 ? (
          <p className="empty-state">No students found.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Marks</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.marks}/100</td>
                    <td className="actions">
                      <button
                        type="button"
                        className="edit-button"
                        onClick={() => handleEdit(student)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="panel counter-panel">
        <div className="counter-intro">
          <p className="eyebrow">REDUX TOOLKIT</p>
          <h2>Global Counter</h2>
          <p>This value is stored in the Redux store.</p>
        </div>

        <div className="counter-value">{counter}</div>

        <div className="counter-controls">
          <button
            type="button"
            onClick={() => reduxDispatch(decrement())}
          >
            − Decrease
          </button>

          <button
            type="button"
            onClick={() => reduxDispatch(increment())}
          >
            + Increase
          </button>

          <button
            type="button"
            onClick={() => reduxDispatch(incrementByAmount(amount))}
          >
            Add {amount}
          </button>

          <button
            type="button"
            className="secondary-button"
            onClick={() => reduxDispatch(resetCounter())}
          >
            Reset
          </button>
        </div>

        <label className="amount-label">
          Amount to add
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </label>
      </section>

      <footer>
        Built with useState, useReducer, Context API, and Redux Toolkit.
      </footer>
    </main>
  );
}

export default App;
