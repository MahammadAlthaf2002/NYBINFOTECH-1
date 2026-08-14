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
// E-COMMERCE
// =================================
import ShopNavbar from "./Ecommerce/components/Navbar";

import ShopHome from "./Ecommerce/pages/Home";

import ShopProducts from "./Ecommerce/pages/Products";

import ShopProductDetails from "./Ecommerce/pages/ProductDetails";

import ShopCart from "./Ecommerce/pages/Cart";

import ShopDashboard from "./Ecommerce/pages/Dashboard";

import ShopProfile from "./Ecommerce/pages/Profile";

import ShopLogin from "./Ecommerce/pages/Login";

import ShopNotFound from "./Ecommerce/pages/NotFound";

    // =================================
// APP
// =================================

function App() {

    var isLoggedIn = true;


    // =================================
    // E-COMMERCE CART STATE
    // =================================

    var [cart, setCart] = useState([]);


    // =================================
    // ADD TO CART
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
    // APP RETURN
    // =================================

    return (

        <BrowserRouter>

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
                {/* SHOP EASY HOME */}
                {/* ================================= */}

                <Route
                    path="/shop"
                    element={
                        <>
                            <ShopNavbar />
                            <ShopHome />
                        </>
                    }
                />


                {/* ================================= */}
                {/* SHOP PRODUCTS */}
                {/* ================================= */}

                <Route
                    path="/shop/products"
                    element={
                        <>
                            <ShopNavbar />

                            <ShopProducts
                                addToCart={addToCart}
                            />
                        </>
                    }
                />


                {/* ================================= */}
                {/* SHOP PRODUCT DETAILS */}
                {/* ================================= */}

                <Route
                    path="/shop/products/:id"
                    element={
                        <>
                            <ShopNavbar />

                            <ShopProductDetails />
                        </>
                    }
                />


                {/* ================================= */}
                {/* SHOP CART */}
                {/* ================================= */}

                <Route
                    path="/shop/cart"
                    element={
                        <>
                            <ShopNavbar />

                            <ShopCart
                                cart={cart}
                            />
                        </>
                    }
                />


                {/* ================================= */}
                {/* SHOP LOGIN */}
                {/* ================================= */}

                <Route
                    path="/shop/login"
                    element={
                        <ShopLogin />
                    }
                />


                {/* ================================= */}
                {/* SHOP DASHBOARD */}
                {/* ================================= */}

                <Route
                    path="/shop/dashboard"
                    element={
                        localStorage.getItem("token") ? (

                            <>
                                <ShopNavbar />
                                <ShopDashboard />
                            </>

                        ) : (

                            <ShopLogin />

                        )
                    }
                />


                {/* ================================= */}
                {/* SHOP PROFILE */}
                {/* ================================= */}

                <Route
                    path="/shop/profile"
                    element={
                        localStorage.getItem("token") ? (

                            <>
                                <ShopNavbar />
                                <ShopProfile />
                            </>

                        ) : (

                            <ShopLogin />

                        )
                    }
                />


                {/* ================================= */}
                {/* SHOP 404 */}
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

            </Routes>

        </BrowserRouter>

    );
}


export default App;