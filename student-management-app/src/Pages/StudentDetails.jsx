import { useParams } from "react-router-dom";

import students from "../data/students";

function StudentDetails() {

    const { id } = useParams();

    const student = students.find(

        (s) => s.id === Number(id)

    );

    if (!student) {

        return <h2>Student Not Found</h2>;

    }

    return (

        <div>

            <h1>Student Details</h1>

            <hr />

            <p>ID : {student.id}</p>

            <p>Name : {student.name}</p>

            <p>Course : {student.course}</p>

            <p>Email : {student.email}</p>

        </div>

    );

}

export default StudentDetails;