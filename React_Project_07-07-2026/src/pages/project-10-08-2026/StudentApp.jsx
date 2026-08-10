import { useState } from "react";

import Header from "../../Project Structure/Header";
import StudentStats from "../../Project Structure/StudentStats";
import StudentForm from "../../Project Structure/StudentForm";
import StudentList from "../../Project Structure/StudentList";
import  Footer from "../../Project Structure//Footer"

function StudentApp() {

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Althaf",
            age: 24,
            course: "React",
            active: true
        },
        {
            id: 2,
            name: "Rahul",
            age: 23,
            course: "JavaScript",
            active: true
        },
          {
            id: 2,
            name: "Rahul",
            age: 23,
            course: "JavaScript",
            active: true
        },
          {
            id: 2,
            name: "Rahul",
            age: 23,
            course: "JavaScript",
            active: true
        },
          {
            id: 2,
            name: "Rahul",
            age: 23,
            course: "JavaScript",
            active: true
        },
        {
            id: 3,
            name: "John",
            age: 25,
            course: "Node.js",
            active: false
        }
    ]);

    const [showStudents, setShowStudents] = useState(true);

    function addStudent(newStudent) {

        setStudents(function(previousStudents) {
            return [...previousStudents, newStudent];
        });
    }

    function toggleStudents() {

        setShowStudents(function(previousValue) {
            return !previousValue;
        });
    }

    return (
        <div>

            <Header />

            <StudentStats students={students} />

            <StudentForm addStudent={addStudent} />

            <button onClick={toggleStudents}>
                {showStudents
                    ? "Hide Students"
                    : "Show Students"
                }
            </button>

            {showStudents && (
                <StudentList students={students} />
            )}

            <Footer />

        </div>
    );
}

export default StudentApp;