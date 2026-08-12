import {
    Navigate
} from "react-router-dom";


import {
    useSelector
} from "react-redux";


function ProtectedRoute({
    children
}) {

    var isAuthenticated =
        useSelector(
            function(state) {

                return state.auth.isAuthenticated;

            }
        );


    if (!isAuthenticated) {

        return (

            <Navigate
                to="/auth-login"
            />

        );

    }


    return children;

}


export default ProtectedRoute;