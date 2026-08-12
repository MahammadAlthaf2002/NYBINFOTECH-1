import {
    useState
} from "react";


import {
    useDispatch
} from "react-redux";


import {
    register
} from "../features/authSlice";


import {
    useNavigate
} from "react-router-dom";


function Register() {

    var dispatch = useDispatch();

    var navigate = useNavigate();


    var [name, setName] =
        useState("");


    var [email, setEmail] =
        useState("");


    var [password, setPassword] =
        useState("");


    function handleSubmit(event) {

        event.preventDefault();


        if (
            !name ||
            !email ||
            !password
        ) {

            alert("Fill all fields");

            return;

        }


        var user = {

            id: Date.now(),

            name: name,

            email: email,

            password: password,

            role: "user"

        };


        localStorage.setItem(

            "registeredUser",

            JSON.stringify(user)

        );


        dispatch(

            register(user)

        );


        navigate("/auth-dashboard");

    }


    return (

        <div>

            <h1>
                Register
            </h1>


            <form
                onSubmit={handleSubmit}
            >

                <input

                    type="text"

                    placeholder="Name"

                    value={name}

                    onChange={function(event) {

                        setName(
                            event.target.value
                        );

                    }}

                />


                <br />


                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={function(event) {

                        setEmail(
                            event.target.value
                        );

                    }}

                />


                <br />


                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={function(event) {

                        setPassword(
                            event.target.value
                        );

                    }}

                />


                <br />


                <button type="submit">

                    Register

                </button>

            </form>

        </div>

    );

}


export default Register;