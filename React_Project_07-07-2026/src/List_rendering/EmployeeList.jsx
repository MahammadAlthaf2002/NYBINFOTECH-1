import React from "react";

function  EmployeeList() {
  const employees = [
    { id: 1, name: "Althaf", department: "React", salary: 35000 },
    { id: 2, name: "Rahul", department: "Java", salary: 22000 },
    { id: 3, name: "John", department: "Python", salary: 45000 },
    { id: 4, name: "David", department: "Testing", salary: 18000 },
  ];

  return (
    <div>
      <h1>Employee Details</h1>

      {employees.map(({ id, name, department, salary }) => (
        <div
          key={id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>{name}</h2>
          <p>Department : {department}</p>
          <p>Salary : ₹{salary}</p>

          <h3 style={{ color: salary >= 30000 ? "green" : "red" }}>
            {salary >= 30000 ? "Eligible for Bonus" : "Not Eligible"}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;