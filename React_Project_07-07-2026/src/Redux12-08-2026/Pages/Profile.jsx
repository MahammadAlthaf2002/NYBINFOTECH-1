import {
    useSelector
} from "react-redux";


function Profile() {

    var user = useSelector(
        function(state) {

            return state.auth.user;

        }
    );


    return (

        <div>

            <h1>
                Profile
            </h1>


            <p>
                Name: {user.name}
            </p>


            <p>
                Email: {user.email}
            </p>


            <p>
                Role: {user.role}
            </p>

        </div>

    );

}


export default Profile;