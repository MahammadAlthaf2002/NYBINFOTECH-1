import { useState } from "react";

/* =========================
   1. FUNCTIONAL COMPONENT
========================= */

function Header() {
  function showWelcome() {
    alert("Welcome to React!");
  }

  return (
    <header className="header">
      <h1>React Practice App</h1>

      <button onClick={showWelcome}>
        Welcome
      </button>
    </header>
  );
}


/* =========================
   2. COMPONENT
========================= */

function About() {
  return (
    <section className="card">
      <h2>About React</h2>

      <p>
        React is a JavaScript library used to
        create interactive user interfaces.
      </p>
    </section>
  );
}


/* =========================
   3. PROPS
========================= */

function Student(props) {
  return (
    <section className="card">
      <h2>Props Example</h2>

      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Experience: {props.experience}</p>
    </section>
  );
}


/* =========================
   4. PROPS DESTRUCTURING
========================= */

function StudentCard({ name, course }) {
  return (
    <section className="card">
      <h2>Props Destructuring</h2>

      <p>Name: {name}</p>
      <p>Course: {course}</p>
    </section>
  );
}


/* =========================
   5. FUNCTION CALLING
========================= */

function Calculator() {

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  return (
    <section className="card">
      <h2>Function Calling</h2>

      <p>Addition: {add(10, 20)}</p>

      <p>Subtraction: {subtract(20, 10)}</p>
    </section>
  );
}


/* =========================
   6. FUNCTION WITH ARGUMENT
========================= */

function Greeting() {

  function greet(name) {
    alert("Hello " + name);
  }

  return (
    <section className="card">
      <h2>Function with Argument</h2>

      <button onClick={() => greet("Althaf")}>
        Greet Althaf
      </button>
    </section>
  );
}


/* =========================
   7. STATE / useState
========================= */

function Counter() {

  var [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <section className="card">
      <h2>State / useState</h2>

      <h3>Count: {count}</h3>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </section>
  );
}


/* =========================
   8. PARENT COMPONENT
========================= */

function Parent() {

  function parentMessage() {
    alert("This function belongs to Parent!");
  }

  return (
    <section className="card">
      <h2>Parent Component</h2>

      <p>
        Parent is passing a function to Child.
      </p>

      <Child showMessage={parentMessage} />
    </section>
  );
}


/* =========================
   9. CHILD COMPONENT
========================= */

function Child({ showMessage }) {

  return (
    <div className="child-box">

      <h3>Child Component</h3>

      <button onClick={showMessage}>
        Call Parent Function
      </button>

    </div>
  );
}


/* =========================
   10. CHILDREN PROP
========================= */

function Box({ children }) {

  return (
    <section className="card">

      <h2>Children Prop</h2>

      <div className="children-box">
        {children}
      </div>

    </section>
  );
}


/* =========================
   11. MAIN APP
========================= */

function App() {

  return (
    <>

      <Header />

      <main className="container">

        {/* Hero */}
        <section className="hero">

          <h1>
            React Fundamentals
          </h1>

          <p>
            Components, JSX, Props, Functions,
            Rendering and State
          </p>

        </section>


        {/* Component */}
        <About />


        {/* Props */}
        <Student
          name="Althaf"
          course="React JS"
          experience="Beginner"
        />


        {/* Props Destructuring */}
        <StudentCard
          name="Althaf"
          course="Frontend Development"
        />


        {/* Function Calling */}
        <Calculator />


        {/* Function with Argument */}
        <Greeting />


        {/* State */}
        <Counter />


        {/* Parent and Child */}
        <Parent />


        {/* Children Prop */}
        <Box>

          <h3>
            Hello Althaf!
          </h3>

          <p>
            This content is passed using children prop.
          </p>

        </Box>


        {/* JSX */}
        <section className="card">

          <h2>JSX Example</h2>

          <h3>Hello { "Althaf" }</h3>

          <p>
            10 + 20 = {10 + 20}
          </p>

        </section>


        {/* Fragment */}
        <section className="card">

          <h2>Fragment Example</h2>

          <>
            <p>First element</p>
            <p>Second element</p>
          </>

        </section>


        {/* Rendering */}
        <section className="card">

          <h2>Rendering Components</h2>

          <p>
            Components are rendered using:
          </p>

          <ul>
            <li>&lt;Header /&gt;</li>
            <li>&lt;About /&gt;</li>
            <li>&lt;Student /&gt;</li>
            <li>&lt;Counter /&gt;</li>
            <li>&lt;Parent /&gt;</li>
            <li>&lt;Child /&gt;</li>
          </ul>

        </section>


        {/* JSX Rules */}
        <section className="card">

          <h2>JSX Rules</h2>

          <ul>

            <li>
              JSX must have one parent element.
            </li>

            <li>
              Close all HTML tags.
            </li>

            <li>
              Use className instead of class.
            </li>

            <li>
              Use {} for JavaScript expressions.
            </li>

            <li>
              Component names start with uppercase.
            </li>

          </ul>

        </section>

      </main>


      <footer className="footer">

        <p>
          React Practice Project © 2026
        </p>

      </footer>

    </>
  );
}


export default App;