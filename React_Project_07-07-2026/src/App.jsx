import React, { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


// =================================
// BASIC REACT TOPICS
// =================================

import ComponentsPage
    from "./pages/components_06-07-2026/ComponentsPage";

import PropsPage
    from "./pages/props_07-07-2026/PropsPage";

import StatemanagmentPage
    from "./pages/Statemangement_08-07-2026/StatemanagementPage";

import FetchApi1
    from "./pages/FetchApi_10-07-2026/FetchApi1";

import FetchApi2
    from "./pages/Fetchapi/FetchApi2";

import ContextApp
    from "./pages/ContextApp";

import Redux
    from "./pages/Redux_16-07-2026/Redux";


// =================================
// MAIN ROUTER
// =================================

import Home
    from "./Routers_04-08-2026/Home";

import About
    from "./Routers_04-08-2026/About";

import Contact
    from "./Routers_04-08-2026/Contact";

import Login
    from "./Routers_04-08-2026/Login";

import Products
    from "./Routers_04-08-2026/Products";

import ProductDetails
    from "./Routers_04-08-2026/ProductDetails";

import Dashboard
    from "./Routers_04-08-2026/Dashboard";

import Profile
    from "./Routers_04-08-2026/Profile";

import Orders
    from "./Routers_04-08-2026/Orders";

import Settings
    from "./Routers_04-08-2026/Settings";

import ProtectedRoute
    from "./Routers_04-08-2026/ProtectedRoute";


// =================================
// STUDENT MANAGEMENT
// =================================

import StudentApp
    from "./pages/project-10-08-2026/StudentApp";

import UserManagement
    from "./pages/userManagement/UserManagement";


// =================================
// EXISTING E-COMMERCE
// =================================

import Navbar
    from "./E-Commerce Website/Components/Navbar";

import ShopHome
    from "./E-Commerce Website/pages/Home";

import ShopProducts
    from "./E-Commerce Website/pages/Products";

import ShopProductDetails
    from "./E-Commerce Website/pages/ProductDetails";

import ShopCart
    from "./E-Commerce Website/pages/Cart";

import ShopDashboard
    from "./E-Commerce Website/pages/Dashboard";

import ShopProfile
    from "./E-Commerce Website/pages/Profile";

import ShopLogin
    from "./E-Commerce Website/pages/Login";

import ShopNotFound
    from "./E-Commerce Website/pages/NotFound";

import Form
    from "./Registration_Form/From";


// =================================
// NEW REDUX TOOLKIT PROJECT
// =================================

// New project Navbar
import ReduxCartNavbar
    from "./ReduxCart/Component/Navbar";

// New project pages
import ReduxCartHome
    from "./ReduxCart/Pages/Home";

import ReduxCartProducts
    from "./ReduxCart/Pages/Products";

import ReduxCartProductDetails
    from "./ReduxCart/Pages/ProductDetails";

import ReduxCartPage
    from "./ReduxCart/Pages/Cart";

import ReduxCartProfile
    from "./ReduxCart/Pages/Profile";


// New project Theme Context
import { useTheme }
    from "./ReduxCart/context/ThemeContext";
    // =================================
// APP
// =================================

function App() {

    var isLoggedIn = true;


    // =================================
    // EXISTING E-COMMERCE CART STATE
    // =================================

    var [cart, setCart] = useState([]);


    // =================================
    // EXISTING ADD TO CART
    // =================================

    function addToCart(product) {

        setCart(function(previousCart) {

            return [
                ...previousCart,
                product
            ];

        });

        alert(
            product.name +
            " added to cart"
        );
    }


    // =================================
    // NEW REDUX PROJECT THEME
    // =================================

    const {
        darkMode
    } = useTheme();


    // =================================
    // APP RETURN
    // =================================

    return (

        <BrowserRouter>

            <div
                className={
                    darkMode
                        ? "app dark"
                        : "app"
                }
            >

                <h1>
                    React JS Practice Project
                </h1>

                <Routes>
                                    {/* ================================= */}
                {/* STUDENT MANAGEMENT */}
                {/* ================================= */}

                <Route
                    path="/StudentApp"
                    element={<StudentApp />}
                />

                <Route
                    path="/UserManagement"
                    element={<UserManagement />}
                />


                {/* ================================= */}
                {/* BASIC REACT */}
                {/* ================================= */}

                <Route
                    path="/components"
                    element={<ComponentsPage />}
                />

                <Route
                    path="/props"
                    element={<PropsPage />}
                />

                <Route
                    path="/statemanagment"
                    element={<StatemanagmentPage />}
                />


                {/* ================================= */}
                {/* FETCH API */}
                {/* ================================= */}

                <Route
                    path="/FetchApi1"
                    element={<FetchApi1 />}
                />

                <Route
                    path="/FetchApi2"
                    element={<FetchApi2 />}
                />


                {/* ================================= */}
                {/* CONTEXT API */}
                {/* ================================= */}

                <Route
                    path="/ContextApp"
                    element={<ContextApp />}
                />


                {/* ================================= */}
                {/* REDUX */}
                {/* ================================= */}

                <Route
                    path="/Redux"
                    element={<Redux />}
                />


                {/* ================================= */}
                {/* NEW REDUX TOOLKIT PROJECT */}
                {/* ================================= */}

                <Route
                    path="/redux-cart"
                    element={
                        <>
                            <ReduxCartNavbar />

                            <ReduxCartHome />
                        </>
                    }
                />

                <Route
                    path="/redux-cart/products"
                    element={
                        <>
                            <ReduxCartNavbar />

                            <ReduxCartProducts />
                        </>
                    }
                />

                <Route
                    path="/redux-cart/products/:id"
                    element={
                        <>
                            <ReduxCartNavbar />

                            <ReduxCartProductDetails />
                        </>
                    }
                />

                <Route
                    path="/redux-cart/cart"
                    element={
                        <>
                            <ReduxCartNavbar />

                            <ReduxCartPage />
                        </>
                    }
                />

                <Route
                    path="/redux-cart/profile"
                    element={
                        <>
                            <ReduxCartNavbar />

                            <ReduxCartProfile />
                        </>
                    }
                />


                {/* ================================= */}
                {/* MAIN ROUTER */}
                {/* ================================= */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />
                                {/* ================================= */}
                {/* PROTECTED DASHBOARD */}
                {/* ================================= */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute
                            isLoggedIn={isLoggedIn}
                        >
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >

                    <Route
                        path="profile"
                        element={<Profile />}
                    />

                    <Route
                        path="orders"
                        element={<Orders />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />

                </Route>


                {/* ================================= */}
                {/* EXISTING SHOP HOME */}
                {/* ================================= */}

                <Route
                    path="/shop"
                    element={
                        <>
                            <Navbar />

                            <ShopHome />
                        </>
                    }
                />


                {/* ================================= */}
                {/* EXISTING SHOP PRODUCTS */}
                {/* ================================= */}

                <Route
                    path="/shop/products"
                    element={
                        <>
                            <Navbar />

                            <ShopProducts
                                addToCart={addToCart}
                            />
                        </>
                    }
                />


                {/* ================================= */}
                {/* EXISTING SHOP PRODUCT DETAILS */}
                {/* ================================= */}

                <Route
                    path="/shop/products/:id"
                    element={
                        <>
                            <Navbar />

                            <ShopProductDetails />
                        </>
                    }
                />


                {/* ================================= */}
                {/* EXISTING SHOP CART */}
                {/* ================================= */}

                <Route
                    path="/shop/cart"
                    element={
                        <>
                            <Navbar />

                            <ShopCart
                                cart={cart}
                            />
                        </>
                    }
                />


                {/* ================================= */}
                {/* EXISTING SHOP LOGIN */}
                {/* ================================= */}

                <Route
                    path="/shop/login"
                    element={
                        <ShopLogin />
                    }
                />


                {/* ================================= */}
                {/* EXISTING SHOP DASHBOARD */}
                {/* ================================= */}

                <Route
                    path="/shop/dashboard"
                    element={
                        localStorage.getItem("token") ? (

                            <>
                                <Navbar />

                                <ShopDashboard />
                            </>

                        ) : (

                            <ShopLogin />

                        )
                    }
                />


                {/* ================================= */}
                {/* EXISTING SHOP PROFILE */}
                {/* ================================= */}

                <Route
                    path="/shop/profile"
                    element={
                        localStorage.getItem("token") ? (

                            <>
                                <Navbar />

                                <ShopProfile />
                            </>

                        ) : (

                            <ShopLogin />

                        )
                    }
                />


                {/* ================================= */}
                {/* EXISTING SHOP 404 */}
                {/* ================================= */}

                <Route
                    path="/shop/*"
                    element={
                        <ShopNotFound />
                    }
                />

                                {/* ================================= */}
                {/* MAIN 404 */}
                {/* ================================= */}

                <Route
                    path="*"
                    element={
                        <h1>
                            Page Not Found
                        </h1>
                    }
                />


                {/* ================================= */}
                {/* REGISTRATION FORM */}
                {/* ================================= */}

                <Route
                    path="From"
                    element={
                        <Form />
                    }
                />

            </Routes>

            </div>

        </BrowserRouter>
    );
}


export default App;
