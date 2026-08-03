import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>

      <h1>Student Details</h1>

      <hr />

      <h3>Student ID : {id}</h3>

      <p>Name : Student {id}</p>

      <p>Course : React Development</p>

      <p>Age : 21 Years</p>

      <p>City : Hyderabad</p>

      <p>Email : student{id}@gmail.com</p>

      <p>Status : Active</p>

      <button onClick={() => navigate("/students")}>
        Back to Students
      </button>

    </div>
  );
}

export default StudentDetails;