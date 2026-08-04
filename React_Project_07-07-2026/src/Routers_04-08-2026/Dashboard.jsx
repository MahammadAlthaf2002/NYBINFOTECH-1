import { Link, Outlet } from "react-router-dom";

function Dashboard() {

  return (
    <div>

      <h2>Dashboard</h2>

      <Link to="profile">Profile</Link>

      <br /><br />

      <Link to="orders">Orders</Link>

      <br /><br />

      <Link to="settings">Settings</Link>

      <hr />

      <Outlet />

    </div>
  );

}

export default Dashboard;