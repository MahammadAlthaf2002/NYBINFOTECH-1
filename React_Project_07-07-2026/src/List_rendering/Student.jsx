import React from "react";

function Student() {
  const students = [
    { id: 1, name: "Althaf", marks: 90 },
    { id: 2, name: "Rahul", marks: 45 },
    { id: 3, name: "John", marks: 28 },
    { id: 4, name: "David", marks: 78 },
  ];

  return (
    <div>
      <h1>Student Results</h1>

      {students.map(({ id, name, marks }) => (
        <div
          key={id}
          style={{
            border: "1px solid blue",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h2>{name}</h2>
          <h3>Marks : {marks}</h3>

          {marks >= 35 ? (
            <p style={{ color: "green" }}>Pass</p>
          ) : (
            <p style={{ color: "red" }}>Fail</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Student;