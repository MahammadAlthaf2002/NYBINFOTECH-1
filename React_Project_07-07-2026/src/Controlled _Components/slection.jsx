import React, { useState } from "react";

function Controlled3() {

  const [course, setCourse] = useState("");

  return (

    <div>

      <select
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
      >

        <option value="">Select</option>

        <option>React</option>

        <option>Angular</option>

        <option>Vue</option>

      </select>

      <h3>{course}</h3>

    </div>

  );
}

export default Controlled3;