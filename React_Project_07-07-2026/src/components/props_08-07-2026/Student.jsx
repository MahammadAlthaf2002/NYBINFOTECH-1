import { useState } from "react";

function Student({ students, sendMessage }) {

  const [count, setCount] = useState(0);

  return (
    <>

      <h2>Child Component</h2>

      <h3>State Example</h3>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      <button
        onClick={() => sendMessage("Hello Parent, Message received from Child")}
      >
        Send Message To Parent
      </button>

      <hr />

      <h2>Students List</h2>

      {
        students.map((student) => (
          <div key={student.id}>
            <h3>Name : {student.name}</h3>
            <h4>Course : {student.course}</h4>
            <hr />
          </div>
        ))
      }

    </>
  );
}

export default Student;