import { useNavigate } from "react-router-dom";

function Dashboard() {

  var navigate = useNavigate();

  function logout() {

    localStorage.removeItem("token");

    navigate("/login");
  }

  return (
    <div>

      <h1>Dashboard</h1>

      <h2>Welcome to ShopEasy Dashboard</h2>

      <p>
        You are successfully logged in.
      </p>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  )
}

export default Dashboard;