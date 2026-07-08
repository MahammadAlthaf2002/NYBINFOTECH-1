import { useState } from "react";
import Student from "../component_08-07-2026/Student";

function App() {

  const [message, setMessage] = useState("Welcome to React");

  const students = [
    {
      id: 1,
      name: "Althaf",
      course: "React"
    },
    {
      id: 2,
      name: "Rahul",
      course: "JavaScript"
    },
    {
      id: 3,
      name: "David",
      course: "CSS"
    }
  ];

  function receiveMessage(data) {
    setMessage(data);
  }

  return (
    <>

      <h1>React Complete Practice</h1>

      <hr />

      <h2>Parent Component</h2>

      <h3>Message : {message}</h3>

      <Student
        students={students}
        sendMessage={receiveMessage}
      />

    </>
  );
}

export default App;