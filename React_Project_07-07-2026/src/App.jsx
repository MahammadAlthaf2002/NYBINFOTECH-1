import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Components
import ComponentsPage from "./pages/components_06-07-2026/ComponentsPage";

// Props
import PropsPage from "./pages/props_07-07-2026/PropsPage";

// State
import StatemanagmentPage from "./pages/Statemangement_08-07-2026/StatemanagementPage";

// Fetch API
import FetchApi1 from "./pages/FetchApi_10-07-2026/FetchApi1";
import FetchApi2 from "./pages/Fetchapi/FetchApi2";

// Context API
import ContextApp from "./pages/ContextApp";

// Redux
import Redux from "./pages/Redux_16-07-2026/Redux";

// Conditional Rendering
import IfConditional2 from "./pages/ConditionalRenderings/IfConditional2";
import TernaryConditionalPage from "./pages/ConditionalRenderings/TernaryConditionalPage";
import AndConditionalPage from "./pages/ConditionalRenderings/AndConditionalPage";
import OrConditionalPage from "./pages/ConditionalRenderings/OrConditionalPage";
import SwitchConditionalPage from "./pages/ConditionalRenderings/SwitchConditionalPage";

// Event Handling
import OnClick from "./pages/EventHandling/OnClick";
import OnDoubleClickEventPage from "./pages/EventHandling/OnDoubleClickEventPage";

// Controlled Components
import TextBox from "./pages/Controlled_component_page/TextBox";
import RegistrationForm2Page from "./pages/Comtrolled_component_page_22-07-2026/RegistrationForm2Page";
import RegistrationFormTask from "./MiniAssessment/Controlled_Compontent_22-07-2026/RegistrationFormtask";

// useEffect
import UseEffect from "./pages/UseEffect_page_21-07-2026/UseEffect";

// Complete Revision
import IfCondition from "./pages/CompleteRevision_24-07_2026/IfCondition";
import TernaryOpertor1 from "./pages/CompleteRevision_24-07_2026/TernaryOpertor1";
import Usee from "./pages/CompleteRevision_24-07_2026/Usee";

// Hooks
import Hook from "./pages/Hooks_page_28-07-2026/Hook";
import UseFrom from "./pages/Hooks_page_28-07-2026/UseFrom";
import WindowSize1 from "./pages/Hooks_page_28-07-2026/windowSize1";

// HOC
import WithAuth1 from "./pages/Hoc_28-07-2026/WithAuth1";
import WithLoading1 from "./pages/Hoc_28-07-2026/WithLoading1";

// Portals
import PortalPage from "./pages/PortalPage/PortalPage";
import PortalPage1 from "./pages/PortalPage/PortalPage1";
import PortalPage2 from "./pages/PortalPage/PortalPage2";

// List Rendering / Other
import Student1 from "./pages/Eventhandlerpage/Student1";
import EmployeePage from "./pages/List_Rendering/EmployeePage";
import ProductPage from "./pages/List_Rendering/ProductPage";
import StudentPage from "./pages/List_Rendering/StudentPage";
import HomePage from "./pages/List_Rendering/Homepage";

// Browser Router Pages
import Home from "./Routers_04-08-2026/Home";
import About from "./Routers_04-08-2026/About";
import Contact from "./Routers_04-08-2026/Contact";
import Login from "./Routers_04-08-2026/Login";
import Products from "./Routers_04-08-2026/Products";
import ProductDetails from "./Routers_04-08-2026/ProductDetails";
import Dashboard from "./Routers_04-08-2026/Dashboard";
import Profile from "./Routers_04-08-2026/Profile";
import Orders from "./Routers_04-08-2026/Orders";
import Settings from "./Routers_04-08-2026/Settings";

import ProtectedRoute from "./Routers_04-08-2026/ProtectedRoute";

// Student Management Project
import StudentApp from "./pages/project-10-08-2026/StudentApp";


function App() {

    const isLoggedIn = true;

    return (
        <BrowserRouter>

            <h1>Student Management System</h1>

            <Routes>

                {/* ================================= */}
                {/* STUDENT MANAGEMENT PROJECT */}
                {/* ================================= */}

                <Route
                    path="/StudentApp"
                    element={<StudentApp />}
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

                {/* Dynamic Route */}

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
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >

                    {/* Nested Routes */}

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


              
            </Routes>

        </BrowserRouter>
    );
}

export default App;