import { Link } from "react-router-dom";

function Students() {

  const students = [
    {
      id: 101,
      name: "Rahul",
      course: "React",
      city: "Hyderabad"
    },
    {
      id: 102,
      name: "Sneha",
      course: "Java",
      city: "Bangalore"
    },
    {
      id: 103,
      name: "Arjun",
      course: "Python",
      city: "Chennai"
    },
    {
      id: 104,
      name: "Priya",
      course: "Node JS",
      city: "Mumbai"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Students List</h1>

      {students.map((student) => (

        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px"
          }}
        >
          <h3>{student.name}</h3>

          <p>Course : {student.course}</p>

          <p>City : {student.city}</p>

          <Link to={`/students/${student.id}`}>
            View Details
          </Link>

        </div>

      ))}

    </div>
  );
}

export default Students;