function Student({ name, age, city, skills, isPassed }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Status: {isPassed ? "Passed" : "Failed"}</p>

      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
