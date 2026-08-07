import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div>

            <h3>Dashboard Menu</h3>

            <hr />

            <p>
                <Link to="/dashboard/profile">
                    Profile
                </Link>
            </p>

            <p>
                <Link to="/dashboard/settings">
                    Settings
                </Link>
            </p>

            <p>
                <Link to="/students">
                    Student List
                </Link>
            </p>

        </div>

    );

}

export default Sidebar;