import React, { useEffect, useState } from "react";

  const StudentManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Althaf", course: "React", age: 22 },
    { id: 2, name: "Rahul", course: "Java", age: 23 },
  ]);
 
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // Add / Update Student
  const handleSubmit = () => {
    if (!name || !course || !age) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedStudents = students.map((student) =>
        student.id === editId
          ? { ...student, name, course, age }
          : student
      );

      setStudents(updatedStudents);
      setEditId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        course,
        age,
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setCourse("");
    setAge("");
  };

  // Delete
  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  // Edit
  const editStudent = (student) => {
    setName(student.name);
    setCourse(student.course);
    setAge(student.age);
    setEditId(student.id);
  };

  // Search
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        {editId ? "Update Student" : "Add Student"}
      </button>

      <button
        onClick={() => {
          setName("");
          setCourse("");
          setAge("");
          setEditId(null);
        }}
      >
        Reset
      </button>

      <hr />

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Students : {filteredStudents.length}</h3>

      {filteredStudents.length === 0 ? (
        <h2>No Students Found</h2>
      ) : (
        filteredStudents.map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{student.name}</h3>
            <p>Course : {student.course}</p>
            <p>Age : {student.age}</p>

            <button onClick={() => editStudent(student)}>
              Edit
            </button>

            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentManagement;

