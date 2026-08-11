import React from "react";

function Header({ totalUsers }) {
  return (
    <header>
      <h1>User Management Dashboard</h1>

      <p>Total Users: {totalUsers}</p>
    </header>
  );
}

export default Header;