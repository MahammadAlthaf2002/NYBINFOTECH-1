import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/authSlice";


export var store = configureStore({

    reducer: {

        auth: authReducer

    }

});