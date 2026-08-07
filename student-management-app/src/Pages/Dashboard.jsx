import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

function Dashboard() {

    return (

        <div>

            <h1>Dashboard</h1>

            <hr />

            <Sidebar />

            <hr />

            <Outlet />

        </div>

    );

}

export default Dashboard;