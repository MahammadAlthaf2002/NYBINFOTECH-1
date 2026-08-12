import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    logout
} from "../features/auth/authSlice";

import {
    useContext
} from "react";

import {
    ThemeContext
} from "../context/ThemeContext";


function Navbar() {

    var dispatch = useDispatch();

    var navigate = useNavigate();


    var user = useSelector(
        function(state) {

            return state.auth.user;

        }
    );


    var {
        theme,
        toggleTheme
    } = useContext(ThemeContext);


    function handleLogout() {

        dispatch(logout());

        navigate("/login");

    }


    return (

        <nav>

            <Link to="/">
                Home
            </Link>


            {user && (

                <>

                    {" | "}

                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                    {" | "}

                    <Link to="/profile">
                        Profile
                    </Link>

                </>

            )}


            {user &&
                user.role === "admin" && (

                <>

                    {" | "}

                    <Link to="/admin">
                        Admin
                    </Link>

                </>

            )}


            {!user && (

                <>

                    {" | "}

                    <Link to="/login">
                        Login
                    </Link>

                    {" | "}

                    <Link to="/register">
                        Register
                    </Link>

                </>

            )}


            {user && (

                <button
                    onClick={handleLogout}
                >
                    Logout
                </button>

            )}


            <button
                onClick={toggleTheme}
            >

                Theme: {theme}

            </button>

        </nav>

    );

}


export default Navbar;