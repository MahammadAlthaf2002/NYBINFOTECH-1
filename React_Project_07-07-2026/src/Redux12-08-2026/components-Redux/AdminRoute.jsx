import {
    Navigate
} from "react-router-dom";


import {
    useSelector
} from "react-redux";


function AdminRoute({
    children
}) {

    var user = useSelector(
        function(state) {

            return state.auth.user;

        }
    );


    if (!user) {

        return (

            <Navigate
                to="/auth-login"
            />

        );

    }


    if (user.role !== "admin") {

        return (

            <Navigate
                to="/auth-dashboard"
            />

        );

    }


    return children;

}


export default AdminRoute;