// import React from "react";
// import ReactDOM from "react-dom/client";

// import { Provider } from "react-redux";

// import { BrowserRouter } from "react-router-dom";

// import App from "./App";

// import store from "./ReduxCart/redux/store";

// import { ThemeProvider } from "./ReduxCart/context/ThemeContext";


// ReactDOM.createRoot(
//     document.getElementById("root")
// ).render(

//     <React.StrictMode>

//         <Provider store={store}>

//             <ThemeProvider>

//                 <BrowserRouter>

//                     <App />

//                 </BrowserRouter>

//             </ThemeProvider>

//         </Provider>

//     </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";

import store from "./ReduxCart/redux/store";

import { ThemeProvider }
    from "./ReduxCart/context/ThemeContext";

import "./index.css";
import "./ReduxCart/index.css";


ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <Provider store={store}>

            <ThemeProvider>

                <App />

            </ThemeProvider>

        </Provider>

    </React.StrictMode>

);
