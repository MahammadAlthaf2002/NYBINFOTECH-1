import {
    useReducer
} from "react";


import {
    useDispatch,
    useSelector
} from "react-redux";


import {
    login,
    clearError
} from "../features/authSlice";


import {
    useNavigate
} from "react-router-dom";


import {
    formReducer,
    initialFormState
} from "../reducers/formReducer";


function Login() {

    var dispatch = useDispatch();

    var navigate = useNavigate();


    var [formState, formDispatch] =
        useReducer(
            formReducer,
            initialFormState
        );


    var error = useSelector(
        function(state) {

            return state.auth.error;

        }
    );


    var isAuthenticated =
        useSelector(
            function(state) {

                return state.auth.isAuthenticated;

            }
        );


    function handleSubmit(event) {

        event.preventDefault();


        dispatch(

            login({

                email: formState.email,

                password: formState.password

            })

        );

    }


    if (isAuthenticated) {

        navigate("/auth-dashboard");

    }


    return (

        <div>

            <h1>
                Authentication Login
            </h1>


            <form
                onSubmit={handleSubmit}
            >

                <input

                    type="email"

                    placeholder="Email"

                    value={formState.email}

                    onChange={function(event) {

                        formDispatch({

                            type: "SET_EMAIL",

                            payload:
                                event.target.value

                        });


                        dispatch(
                            clearError()
                        );

                    }}

                />


                <br />


                <input

                    type="password"

                    placeholder="Password"

                    value={formState.password}

                    onChange={function(event) {

                        formDispatch({

                            type:
                                "SET_PASSWORD",

                            payload:
                                event.target.value

                        });


                        dispatch(
                            clearError()
                        );

                    }}

                />


                <br />


                <button type="submit">

                    Login

                </button>


                {error && (

                    <p>

                        {error}

                    </p>

                )}

            </form>

        </div>

    );

}


export default Login;