import React from "react";
import withAuth from "../../Hoc_23-07-2026/WithAuth";
import Dashboard from "../../Hoc_23-07-2026/Dashboard"
import { useResolvedPath } from "react-router-dom";
import Users from "../../Hoc_23-07-2026/Users";
import AdminPanel from "../../Hoc_23-07-2026/AdminPanel";

const ProtectedDashboard = withAuth(Dashboard);

const ProtectedUsers = withAuth(Users);


const ProtectedAdmin = withAuth(AdminPanel);




const HocPage = () => {
  return (
    <div>
      <ProtectedDashboard />
      <hr/>
      <ProtectedAdmin/>
      <hr/>
      <ProtectedUsers/>


    </div>
  );
};

export default HocPage;
