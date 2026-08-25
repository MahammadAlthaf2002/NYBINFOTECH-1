import { useState } from "react";

export default function App() {
  const user = {
    id: 1,
    name: "Althaf",
    age: 24,
    city: "Anantapur",
    email: "althaf@example.com",
    profile: {
      role: null,
      skills: ["JavaScript", "React"]
    },
    greet() {
      return `Hello, ${this.name}! Welcome to the Object Features Project.`;
    }
  };

  // Object Destructuring
  const { name, age, city, ...remainingUserData } = user;

  // Object.keys(), Object.values(), Object.entries()
  const keys = Object.keys(user);
  const values = Object.values(user);
  const entries = Object.entries({
    id: user.id,
    name: user.name,
    age: user.age,
    city: user.city,
    email: user.email
  });

  // Object.assign()
  const assignedUser = Object.assign({}, user, {
    age: 25,
    status: "Active"
  });

  // Optional chaining + Nullish coalescing
  const role = user.profile?.role ?? "Guest User";
  const country = user.address?.country ?? "India";

  // Spread operator
  const [updatedUser, setUpdatedUser] = useState({
    ...user,
    age: user.age
  });

  const increaseAge = () => {
    setUpdatedUser((previousUser) => ({
      ...previousUser,
      age: previousUser.age + 1
    }));
  };

  return (
    <main>
      <header>
        <h1>JavaScript Object Features</h1>
        <p>One small React project combining all the concepts covered today.</p>
      </header>

      <section className="card">
        <h2>1. Object Destructuring</h2>
        <p>We pulled values from the user object into variables.</p>
        <code>{`const { name, age, city } = user;`}</code>
        <div className="result">
          Name: {name} | Age: {age} | City: {city}
        </div>
      </section>

      <section className="card">
        <h2>2. Object Method</h2>
        <p>A function stored inside an object.</p>
        <code>{`user.greet()`}</code>
        <div className="result">{user.greet()}</div>
      </section>

      <section className="card">
        <h2>3. Object.keys()</h2>
        <p>Returns all object keys as a new array.</p>
        <code>{`Object.keys(user)`}</code>
        <div className="list">
          {keys.map((key) => <span key={key}>{key}</span>)}
        </div>
      </section>

      <section className="card">
        <h2>4. Object.values()</h2>
        <p>Returns all object values as a new array.</p>
        <code>{`Object.values(user)`}</code>
        <div className="list">
          {values.map((value, index) => (
            <span key={index}>
              {typeof value === "object" ? JSON.stringify(value) : String(value)}
            </span>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>5. Object.entries()</h2>
        <p>Returns both keys and values as key-value pairs, then we use map() to display them.</p>
        <code>{`Object.entries(user).map(([key, value]) => ...)`}</code>
        <div className="table">
          {entries.map(([key, value]) => (
            <div className="row" key={key}>
              <strong>{key}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>6. Object.assign()</h2>
        <p>Creates a copied/merged object with updated values.</p>
        <code>{`Object.assign({}, user, { age: 25, status: "Active" })`}</code>
        <pre>{JSON.stringify({
          name: assignedUser.name,
          age: assignedUser.age,
          status: assignedUser.status
        }, null, 2)}</pre>
      </section>

      <section className="card">
        <h2>7. Optional Chaining (?.)</h2>
        <p>Safely checks nested properties. If address does not exist, the app does not crash.</p>
        <code>{`user.address?.country`}</code>
        <div className="result">Country result: {String(user.address?.country)}</div>
      </section>

      <section className="card">
        <h2>8. Nullish Coalescing (??)</h2>
        <p>Uses a default value only when the value is null or undefined.</p>
        <code>{`user.profile?.role ?? "Guest User"`}</code>
        <div className="result">Role: {role}</div>
        <div className="result">Country with default: {country}</div>
      </section>

      <section className="card">
        <h2>9. Spread Operator (...)</h2>
        <p>Copies the existing object and updates only the required property.</p>
        <code>{`setUpdatedUser({ ...previousUser, age: previousUser.age + 1 })`}</code>
        <div className="result">Current Age: {updatedUser.age}</div>
        <button onClick={increaseAge}>Increase Age</button>
      </section>

      <section className="card">
        <h2>10. Rest Operator (...)</h2>
        <p>Collects the remaining properties after extracting selected values.</p>
        <code>{`const { name, age, city, ...remainingUserData } = user;`}</code>
        <pre>{JSON.stringify(remainingUserData, null, 2)}</pre>
      </section>

      <section className="card summary">
        <h2>Quick Revision</h2>
        <ul>
          <li>Destructuring → pulls values into variables.</li>
          <li>Object Method → function inside an object.</li>
          <li>Object.keys() → returns keys in a new array.</li>
          <li>Object.values() → returns values in a new array.</li>
          <li>Object.entries() → returns key-value pairs in a new array.</li>
          <li>Object.assign() → copies or merges objects.</li>
          <li>?. → safely accesses nested properties.</li>
          <li>?? → gives a default value for null or undefined.</li>
          <li>Spread → copies/expands and can update data.</li>
          <li>Rest → collects remaining properties.</li>
        </ul>
      </section>
    </main>
  );
}
