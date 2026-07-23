import React from "react";

import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import AdminPanel from "./components/AdminPanel";

import withAuth from "./hoc/WithAuth";

// Wrap components with HOC
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedUsers = withAuth(Users);
const ProtectedAdmin = withAuth(AdminPanel);

function HocPage() {
  return (
    <div>
      <h1>Higher Order Component Example</h1>

      <ProtectedDashboard />

      <hr />

      <ProtectedUsers />

      <hr />

      <ProtectedAdmin />
    </div>
  );
}

export default HocPage;


