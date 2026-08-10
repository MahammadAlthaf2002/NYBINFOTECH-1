import { useState } from "react";

function StudentForm({ addStudent }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (name === "" || age === "" || course === "") {
            alert("Please fill all fields");
            return;
        }

        var newStudent = {
            id: Date.now(),
            name: name,
            age: age,
            course: course,
            active: true
        };

        addStudent(newStudent);

        setName("");
        setAge("");
        setCourse("");
    }

    return (
        <div>
            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={function(event) {
                        setName(event.target.value);
                    }}
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={function(event) {
                        setAge(event.target.value);
                    }}
                />

                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={function(event) {
                        setCourse(event.target.value);
                    }}
                />

                <button type="submit">
                    Add Student
                </button>

            </form>
        </div>
    );
}

export default StudentForm;