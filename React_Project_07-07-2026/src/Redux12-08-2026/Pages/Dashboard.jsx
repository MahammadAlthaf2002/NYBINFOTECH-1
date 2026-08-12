import {
    useSelector
} from "react-redux";


function Dashboard() {

    var user = useSelector(
        function(state) {

            return state.auth.user;

        }
    );


    return (

        <div>

            <h1>
                Authentication Dashboard
            </h1>


            <h2>
                Welcome, {user.name}
            </h2>


            <p>
                Email: {user.email}
            </p>


            <p>
                Role: {user.role}
            </p>

        </div>

    );

}


export default Dashboard;