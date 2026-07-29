import { useState } from "react";
import Student from "./Student2";

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  return (
    <div>
      <h2>Parent Component</h2>

      <h3>Count : {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <hr />

      <Student
        name="Althaf"
        course="React JS"
      />
    </div>
  );
}

export default Parent;