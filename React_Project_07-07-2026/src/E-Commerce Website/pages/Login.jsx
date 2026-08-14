import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var navigate = useNavigate();

  function handleLogin(e) {

    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {

      localStorage.setItem("token", "loggedIn");

      navigate("/dashboard");

    } else {

      alert("Invalid email or password");

    }
  }

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Email: admin@gmail.com
      </p>

      <p>
        Password: 1234
      </p>

    </div>
  );
}

export default Login;