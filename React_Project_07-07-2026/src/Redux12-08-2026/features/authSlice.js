import { createSlice } from "@reduxjs/toolkit";


var savedUser = localStorage.getItem("user");


var initialState = {

    user: savedUser
        ? JSON.parse(savedUser)
        : null,

    isAuthenticated: savedUser
        ? true
        : false,

    loading: false,

    error: null

};


var authSlice = createSlice({

    name: "auth",

    initialState: initialState,

    reducers: {

        register: function(state, action) {

            var newUser = action.payload;


            localStorage.setItem(
                "user",
                JSON.stringify(newUser)
            );


            state.user = newUser;

            state.isAuthenticated = true;

            state.error = null;

        },


        login: function(state, action) {

            var loginUser = action.payload;


            var storedUser =
                localStorage.getItem(
                    "registeredUser"
                );


            if (!storedUser) {

                state.error =
                    "User not registered";

                return;

            }


            var user =
                JSON.parse(storedUser);


            if (
                user.email === loginUser.email &&
                user.password === loginUser.password
            ) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(user)
                );


                state.user = user;

                state.isAuthenticated = true;

                state.error = null;

            }

            else {

                state.error =
                    "Invalid email or password";

            }

        },


        logout: function(state) {

            localStorage.removeItem("user");


            state.user = null;

            state.isAuthenticated = false;

            state.error = null;

        },


        clearError: function(state) {

            state.error = null;

        }

    }

});


export var {
    register,
    login,
    logout,
    clearError
} = authSlice.actions;


export default authSlice.reducer;