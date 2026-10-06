import { useState } from "react";


/* =====================================================
   HEADER COMPONENT
===================================================== */

function Header() {
  return (
    <header className="header">
      <h1>React Practice App</h1>
      <p>Props • State • Components • Conditional Rendering</p>
    </header>
  );
}


/* =====================================================
   PROPS
   Parent → Child
===================================================== */

function Student({ name, course, age }) {
  return (
    <section className="card">

      <h2>1. Props</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

    </section>
  );
}


/* =====================================================
   PROPS DESTRUCTURING
===================================================== */

function StudentDetails({ name, course }) {
  return (
    <div className="small-box">

      <h3>Props Destructuring</h3>

      <p>Name: {name}</p>

      <p>Course: {course}</p>

    </div>
  );
}


/* =====================================================
   STATE / useState
===================================================== */

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

      <h2>2. State and useState</h2>

      <h3 className="count">
        Count: {count}
      </h3>

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


/* =====================================================
   PARENT COMPONENT
===================================================== */

function Parent() {

  var parentName = "Althaf";

  return (
    <section className="card">

      <h2>3. Parent and Child Components</h2>

      <p>
        This is the Parent Component.
      </p>

      <Child name={parentName} />

    </section>
  );
}


/* =====================================================
   CHILD COMPONENT
===================================================== */

function Child({ name }) {

  return (
    <div className="child-box">

      <h3>Child Component</h3>

      <p>
        Parent sent my name:
        <strong> {name}</strong>
      </p>

    </div>
  );
}


/* =====================================================
   PASSING FUNCTION AS PROPS
===================================================== */

function FunctionParent() {

  function showMessage() {

    alert("Hello! This function belongs to the Parent.");

  }

  return (
    <section className="card">

      <h2>4. Passing Function as Props</h2>

      <p>
        Parent passes a function to Child.
      </p>

      <FunctionChild
        showMessage={showMessage}
      />

    </section>
  );
}


/* =====================================================
   FUNCTION CHILD
===================================================== */

function FunctionChild({ showMessage }) {

  return (
    <div className="child-box">

      <h3>Child Component</h3>

      <button onClick={showMessage}>
        Call Parent Function
      </button>

    </div>
  );
}


/* =====================================================
   CHILD → PARENT
===================================================== */

function ChildToParent() {

  var [message, setMessage] = useState(
    "No message received yet."
  );

  function receiveMessage(data) {

    setMessage(data);

  }

  return (
    <section className="card">

      <h2>5. Child → Parent Data</h2>

      <p>Parent received:</p>

      <h3 className="message">
        {message}
      </h3>

      <ChildSender
        sendData={receiveMessage}
      />

    </section>
  );
}


/* =====================================================
   CHILD SENDER
===================================================== */

function ChildSender({ sendData }) {

  function handleClick() {

    sendData(
      "Hello Parent! Data came from Child."
    );

  }

  return (
    <div className="child-box">

      <h3>Child Component</h3>

      <button onClick={handleClick}>
        Send Data to Parent
      </button>

    </div>
  );
}


/* =====================================================
   SHARING DATA BETWEEN COMPONENTS
===================================================== */

function DataSharing() {

  var [name, setName] = useState(
    "No name selected"
  );

  function changeName() {

    setName("Althaf");

  }

  return (
    <section className="card">

      <h2>6. Sharing Data Between Components</h2>

      <p>Shared State:</p>

      <h3>{name}</h3>

      <DataInput
        changeName={changeName}
      />

      <DataDisplay
        name={name}
      />

    </section>
  );
}


/* =====================================================
   COMPONENT A
===================================================== */

function DataInput({ changeName }) {

  return (
    <div className="small-box">

      <h3>Component A</h3>

      <button onClick={changeName}>
        Change Name
      </button>

    </div>
  );
}


/* =====================================================
   COMPONENT B
===================================================== */

function DataDisplay({ name }) {

  return (
    <div className="small-box">

      <h3>Component B</h3>

      <p>
        Received Name:
        <strong> {name}</strong>
      </p>

    </div>
  );
}


/* =====================================================
   CONDITIONAL RENDERING
   TERNARY OPERATOR
===================================================== */

function LoginStatus() {

  var [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {

    setIsLoggedIn(!isLoggedIn);

  }

  return (
    <section className="card">

      <h2>7. Conditional Rendering - Ternary</h2>

      {
        isLoggedIn
          ? (
            <p className="success">
              Welcome! You are logged in.
            </p>
          )
          : (
            <p className="error">
              Please login first.
            </p>
          )
      }

      <button onClick={toggleLogin}>

        {
          isLoggedIn
            ? "Logout"
            : "Login"
        }

      </button>

    </section>
  );
}


/* =====================================================
   CONDITIONAL RENDERING
   LOGICAL &&
===================================================== */

function AdminPanel() {

  var [isAdmin, setIsAdmin] = useState(false);

  function toggleAdmin() {

    setIsAdmin(!isAdmin);

  }

  return (
    <section className="card">

      <h2>8. Conditional Rendering - &&</h2>

      <button onClick={toggleAdmin}>

        {
          isAdmin
            ? "Remove Admin"
            : "Make Admin"
        }

      </button>

      {
        isAdmin && (
          <div className="admin-box">

            <h3>Admin Panel</h3>

            <p>
              This panel is visible because
              isAdmin is true.
            </p>

          </div>
        )
      }

    </section>
  );
}


/* =====================================================
   CONDITIONAL RENDERING
   IF STATEMENT
===================================================== */

function AgeCheck() {

  var age = 20;

  if (age >= 18) {

    return (
      <section className="card">

        <h2>9. Conditional Rendering - if</h2>

        <h3>You are an Adult.</h3>

        <p>Age: {age}</p>

      </section>
    );

  }

  return (
    <section className="card">

      <h2>9. Conditional Rendering - if</h2>

      <h3>You are a Minor.</h3>

      <p>Age: {age}</p>

    </section>
  );
}


/* =====================================================
   COMPONENT HIERARCHY
===================================================== */

function ComponentHierarchy() {

  return (
    <section className="card">

      <h2>10. Component Hierarchy</h2>

      <div className="tree">

        <div className="tree-item">
          App
        </div>

        <div className="arrow">
          ↓
        </div>

        <div className="tree-row">

          <div className="tree-item">
            Header
          </div>

          <div className="tree-item">
            Main
          </div>

          <div className="tree-item">
            Footer
          </div>

        </div>

        <div className="arrow">
          ↓
        </div>

        <div className="tree-row">

          <div className="tree-item">
            Student
          </div>

          <div className="tree-item">
            Counter
          </div>

          <div className="tree-item">
            Parent
          </div>

        </div>

      </div>

    </section>
  );
}


/* =====================================================
   MAIN APP COMPONENT
===================================================== */

function App() {

  return (
    <>

      <Header />

      <main className="container">

        <section className="hero">

          <h1>
            React Today's Practice
          </h1>

          <p>
            Props, State, Parent-Child Communication
            and Conditional Rendering
          </p>

        </section>


        {/* Props */}

        <Student
          name="Althaf"
          course="React JS"
          age={22}
        />


        {/* Props Destructuring */}

        <section className="card">

          <h2>
            Props Destructuring
          </h2>

          <StudentDetails
            name="Althaf"
            course="Frontend Development"
          />

        </section>


        {/* State */}

        <Counter />


        {/* Parent → Child */}

        <Parent />


        {/* Function as Props */}

        <FunctionParent />


        {/* Child → Parent */}

        <ChildToParent />


        {/* Sharing Data */}

        <DataSharing />


        {/* Ternary */}

        <LoginStatus />


        {/* && */}

        <AdminPanel />


        {/* if */}

        <AgeCheck />


        {/* Component Hierarchy */}

        <ComponentHierarchy />


        {/* Summary */}

        <section className="card">

          <h2>
            Today's Topics
          </h2>

          <ul>

            <li>Props</li>

            <li>State</li>

            <li>useState</li>

            <li>Parent and Child Components</li>

            <li>Parent → Child Data</li>

            <li>Child → Parent Data</li>

            <li>Passing Functions as Props</li>

            <li>Sharing Data Between Components</li>

            <li>Component Hierarchy</li>

            <li>Conditional Rendering</li>

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