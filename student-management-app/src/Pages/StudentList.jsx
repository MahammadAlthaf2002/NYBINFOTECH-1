import { Link } from "react-router-dom";

import students from "../data/students";

function StudentList() {

    return (

        <div>

            <h1>Student List</h1>

            <hr />

            {

                students.map((student) => (

                    <div key={student.id}>

                        <h3>{student.name}</h3>

                        <p>{student.course}</p>

                        <Link to={`/students/${student.id}`}>

                            View Details

                        </Link>

                        <hr />

                    </div>

                ))

            }

        </div>

    );

}

export default StudentList;