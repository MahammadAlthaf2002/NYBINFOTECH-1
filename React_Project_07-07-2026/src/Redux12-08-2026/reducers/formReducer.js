export var initialFormState = {

    email: "",

    password: ""

};


export function formReducer(
    state,
    action
) {

    switch (action.type) {

        case "SET_EMAIL":

            return {

                ...state,

                email: action.payload

            };


        case "SET_PASSWORD":

            return {

                ...state,

                password: action.payload

            };


        case "RESET":

            return initialFormState;


        default:

            return state;

    }

}