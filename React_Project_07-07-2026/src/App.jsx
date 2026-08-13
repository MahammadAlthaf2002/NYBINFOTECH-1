import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


// =================================
// COMPONENTS
// =================================

import ComponentsPage
    from "./pages/components_06-07-2026/ComponentsPage";


// =================================
// PROPS
// =================================

import PropsPage
    from "./pages/props_07-07-2026/PropsPage";


// =================================
// STATE
// =================================

import StatemanagmentPage
    from "./pages/Statemangement_08-07-2026/StatemanagementPage";


// =================================
// FETCH API
// =================================

import FetchApi1
    from "./pages/FetchApi_10-07-2026/FetchApi1";

import FetchApi2
    from "./pages/Fetchapi/FetchApi2";


// =================================
// CONTEXT API
// =================================

import ContextApp
    from "./pages/ContextApp";


// =================================
// REDUX
// =================================

import Redux
    from "./pages/Redux_16-07-2026/Redux";


// =================================
// CONDITIONAL RENDERING
// =================================

import IfConditional2
    from "./pages/ConditionalRenderings/IfConditional2";

import TernaryConditionalPage
    from "./pages/ConditionalRenderings/TernaryConditionalPage";

import AndConditionalPage
    from "./pages/ConditionalRenderings/AndConditionalPage";

import OrConditionalPage
    from "./pages/ConditionalRenderings/OrConditionalPage";

import SwitchConditionalPage
    from "./pages/ConditionalRenderings/SwitchConditionalPage";


// =================================
// EVENT HANDLING
// =================================

import OnClick
    from "./pages/EventHandling/OnClick";

import OnDoubleClickEventPage
    from "./pages/EventHandling/OnDoubleClickEventPage";


// =================================
// CONTROLLED COMPONENTS
// =================================

import TextBox
    from "./pages/Controlled_component_page/TextBox";

import RegistrationForm2Page
    from "./pages/Comtrolled_component_page_22-07-2026/RegistrationForm2Page";

import RegistrationFormTask
    from "./MiniAssessment/Controlled_Compontent_22-07-2026/RegistrationFormtask";


// =================================
// USE EFFECT
// =================================

import UseEffect
    from "./pages/UseEffect_page_21-07-2026/UseEffect";


// =================================
// COMPLETE REVISION
// =================================

import IfCondition
    from "./pages/CompleteRevision_24-07_2026/IfCondition";

import TernaryOpertor1
    from "./pages/CompleteRevision_24-07_2026/TernaryOpertor1";

import Usee
    from "./pages/CompleteRevision_24-07_2026/Usee";


// =================================
// HOOKS
// =================================

import Hook
    from "./pages/Hooks_page_28-07-2026/Hook";

import UseFrom
    from "./pages/Hooks_page_28-07-2026/UseFrom";

import WindowSize1
    from "./pages/Hooks_page_28-07-2026/windowSize1";


// =================================
// HOC
// =================================

import WithAuth1
    from "./pages/Hoc_28-07-2026/WithAuth1";

import WithLoading1
    from "./pages/Hoc_28-07-2026/WithLoading1";


// =================================
// PORTALS
// =================================

import PortalPage
    from "./pages/PortalPage/PortalPage";

import PortalPage1
    from "./pages/PortalPage/PortalPage1";

import PortalPage2
    from "./pages/PortalPage/PortalPage2";


// =================================
// LIST RENDERING
// =================================

import Student1
    from "./pages/Eventhandlerpage/Student1";

import EmployeePage
    from "./pages/List_Rendering/EmployeePage";

import ProductPage
    from "./pages/List_Rendering/ProductPage";

import StudentPage
    from "./pages/List_Rendering/StudentPage";

import HomePage
    from "./pages/List_Rendering/Homepage";


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
// STUDENT MANAGEMENT PROJECT
// =================================

import StudentApp
    from "./pages/project-10-08-2026/StudentApp";

import UserManagement
    from "./pages/userManagement/UserManagement";


// =================================
// AUTHENTICATION PROJECT
// =================================

import AuthLogin
    from "./Redux12-08-2026/Pages/Login";

import Register
    from "./Redux12-08-2026/Pages/Register";

import AuthDashboard
    from "./Redux12-08-2026/Pages/Dashboard";

import AuthProfile
    from "./Redux12-08-2026/Pages/Profile";

import AdminDashboard
    from "./Redux12-08-2026/Pages/AdminDashboard";

import AuthProtectedRoute
    from "./Redux12-08-2026/components-Redux/ProtectedRoute";

import AdminRoute
    from "./Redux12-08-2026/components-Redux/AdminRoute";


// =================================
// FOOD DELIVERY APP
// =================================

import FoodNavbar
    from "./Food_Delivery_App/components/Navbar";

import FoodHome
    from "./Food_Delivery_App/pages/Home";

import Restaurant
    from "./Food_Delivery_App/pages/Restaurant";

import FoodCart
    from "./Food_Delivery_App/pages/Cart";

import FoodOrders
    from "./Food_Delivery_App/pages/Orders";

import FoodProfile
    from "./Food_Delivery_App/pages/Profile";

import FoodNotFound
    from "./Food_Delivery_App/pages/NotFound";


// =================================
// APP
// =================================

function App() {

    var isLoggedIn = true;

    return (

        <BrowserRouter>

            <h1>
                React JS Practice Project
            </h1>

            <Routes>
                                {/* ================================= */}
                {/* STUDENT MANAGEMENT PROJECT */}
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
                {/* BASIC REACT TOPICS */}
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
                {/* CONDITIONAL RENDERING */}
                {/* ================================= */}

                <Route
                    path="/IfConditional2"
                    element={<IfConditional2 />}
                />

                <Route
                    path="/TernaryConditional"
                    element={<TernaryConditionalPage />}
                />

                <Route
                    path="/AndConditional"
                    element={<AndConditionalPage />}
                />

                <Route
                    path="/OrConditional"
                    element={<OrConditionalPage />}
                />

                <Route
                    path="/SwitchConditional"
                    element={<SwitchConditionalPage />}
                />


                {/* ================================= */}
                {/* EVENT HANDLING */}
                {/* ================================= */}

                <Route
                    path="/OnClick"
                    element={<OnClick />}
                />

                <Route
                    path="/OnDoubleClickEvent"
                    element={<OnDoubleClickEventPage />}
                />


                {/* ================================= */}
                {/* CONTROLLED COMPONENTS */}
                {/* ================================= */}

                <Route
                    path="/TextBox"
                    element={<TextBox />}
                />

                <Route
                    path="/RegistrationFrom2Page"
                    element={<RegistrationForm2Page />}
                />

                <Route
                    path="/RegistrationFromTask"
                    element={<RegistrationFormTask />}
                />


                {/* ================================= */}
                {/* USE EFFECT */}
                {/* ================================= */}

                <Route
                    path="/UseEffect1"
                    element={<UseEffect />}
                />


                {/* ================================= */}
                {/* COMPLETE REVISION */}
                {/* ================================= */}

                <Route
                    path="/IfCondition"
                    element={<IfCondition />}
                />

                <Route
                    path="/TernaryOpertor1"
                    element={<TernaryOpertor1 />}
                />

                <Route
                    path="/Usee"
                    element={<Usee />}
                />


                {/* ================================= */}
                {/* HOOKS */}
                {/* ================================= */}

                <Route
                    path="/Hook"
                    element={<Hook />}
                />

                <Route
                    path="/UseFrom"
                    element={<UseFrom />}
                />

                <Route
                    path="/WindowSize1"
                    element={<WindowSize1 />}
                />


                {/* ================================= */}
                {/* HOC */}
                {/* ================================= */}

                <Route
                    path="/WithAuth1"
                    element={<WithAuth1 />}
                />

                <Route
                    path="/WithLoading1"
                    element={<WithLoading1 />}
                />


                {/* ================================= */}
                {/* PORTALS */}
                {/* ================================= */}

                <Route
                    path="/PortalPage"
                    element={<PortalPage />}
                />

                <Route
                    path="/PortalPage1"
                    element={<PortalPage1 />}
                />

                <Route
                    path="/PortalPage2"
                    element={<PortalPage2 />}
                />


                {/* ================================= */}
                {/* LIST RENDERING */}
                {/* ================================= */}

                <Route
                    path="/Student1"
                    element={<Student1 />}
                />

                <Route
                    path="/EmployeePage"
                    element={<EmployeePage />}
                />

                <Route
                    path="/Productpage"
                    element={<ProductPage />}
                />

                <Route
                    path="/Studentpage"
                    element={<StudentPage />}
                />

                <Route
                    path="/Homepage"
                    element={<HomePage />}
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


                {/* ================================= */}
                {/* DYNAMIC PRODUCT ROUTE */}
                {/* ================================= */}

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

                    {/* ================================= */}
                    {/* NESTED DASHBOARD ROUTES */}
                    {/* ================================= */}

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
                {/* AUTHENTICATION PROJECT */}
                {/* ================================= */}

                <Route
                    path="/auth-login"
                    element={<AuthLogin />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* ================================= */}
                {/* PROTECTED AUTH DASHBOARD */}
                {/* ================================= */}

                <Route
                    path="/auth-dashboard"
                    element={
                        <AuthProtectedRoute>
                            <AuthDashboard />
                        </AuthProtectedRoute>
                    }
                />


                {/* ================================= */}
                {/* PROTECTED AUTH PROFILE */}
                {/* ================================= */}

                <Route
                    path="/auth-profile"
                    element={
                        <AuthProtectedRoute>
                            <AuthProfile />
                        </AuthProtectedRoute>
                    }
                />


                {/* ================================= */}
                {/* ADMIN ROUTE */}
                {/* ================================= */}

                <Route
                    path="/admin-dashboard"
                    element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    }
                />


                {/* ================================= */}
                {/* FOOD DELIVERY APP */}
                {/* ================================= */}

                <Route
                    path="/food"
                    element={
                        <>
                            <FoodNavbar />
                            <FoodHome />
                        </>
                    }
                />


                {/* ================================= */}
                {/* FOOD RESTAURANT DETAILS */}
                {/* ================================= */}

                <Route
                    path="/food/restaurant/:id"
                    element={
                        <>
                            <FoodNavbar />
                            <Restaurant />
                        </>
                    }
                />


                {/* ================================= */}
                {/* FOOD CART */}
                {/* ================================= */}

                <Route
                    path="/food/cart"
                    element={
                        <>
                            <FoodNavbar />
                            <FoodCart />
                        </>
                    }
                />

                                {/* ================================= */}
                {/* FOOD ORDERS */}
                {/* ================================= */}

                <Route
                    path="/food/orders"
                    element={
                        <>
                            <FoodNavbar />
                            <FoodOrders />
                        </>
                    }
                />


                {/* ================================= */}
                {/* FOOD PROFILE */}
                {/* ================================= */}

                <Route
                    path="/food/profile"
                    element={
                        <>
                            <FoodNavbar />
                            <FoodProfile />
                        </>
                    }
                />


                {/* ================================= */}
                {/* FOOD DELIVERY 404 */}
                {/* ================================= */}

                <Route
                    path="/food/*"
                    element={<FoodNotFound />}
                />


                {/* ================================= */}
                {/* MAIN 404 PAGE */}
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