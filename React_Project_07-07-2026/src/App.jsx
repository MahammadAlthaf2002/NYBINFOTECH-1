import { BrowserRouter, Routes, Route ,NavLink} from "react-router-dom";


import ComponentsPage from "./pages/components_06-07-2026/ComponentsPage";
import PropsPage from "./pages/props_07-07-2026/PropsPage";
import StatemanagmentPage from "./pages/Statemangement_08-07-2026/StatemanagementPage";
import FetchApi1 from "./pages/FetchApi_10-07-2026/FetchApi1";
import FetchApi2 from "./pages/Fetchapi/FetchApi2";
import ContextApp from "./pages/ContextApp";
import Redux from "./pages/Redux_16-07-2026/Redux";
import IfConditional2 from "./pages/ConditionalRenderings/IfConditional2";
import TernaryConditionalPage from "./pages/ConditionalRenderings/TernaryConditionalPage";
import AndConditionalPage from "./pages/ConditionalRenderings/AndConditionalPage";
import OrConditionalPage from "./pages/ConditionalRenderings/OrConditionalPage";
import SwitchConditionalPage from "./pages/ConditionalRenderings/SwitchConditionalPage";
import OnClick from "./pages/EventHandling/OnClick";
import OnDoubleClickEventPage from "./pages/EventHandling/OnDoubleClickEventPage";
import TextBox from "./pages/Controlled_component_page/TextBox";
import UseEffect from "./pages/UseEffect_page_21-07-2026/UseEffect"
import RegistrationForm2Page from "./pages/Comtrolled_component_page_22-07-2026/RegistrationForm2Page";
import RegistrationFormTask from "./MiniAssessment/Controlled_Compontent_22-07-2026/RegistrationFormtask";

import IfCondition from "./pages/CompleteRevision_24-07_2026/IfCondition";
import TernaryOpertor1 from "./pages/CompleteRevision_24-07_2026/TernaryOpertor1";
import Usee from "./pages/CompleteRevision_24-07_2026/Usee";
import Hook from "./pages/Hooks_page_28-07-2026/Hook";
import UseFrom from "./pages/Hooks_page_28-07-2026/UseFrom";
import WindowSize1 from "./pages/Hooks_page_28-07-2026/windowSize1";
import WithAuth1 from "./pages/Hoc_28-07-2026/WithAuth1";
import WithLoading1 from "./pages/Hoc_28-07-2026/WithLoading1";

// import AppPage from "./pages/PureComponent_page/AppPage";
// import EmployeePage from "./pages/PureComponent_page/EmployeePage";
// import ReactMemoPage from "./pages/ReactMemoPage/ReactMemoPage";
// import UseMemo from "./pages/ReactMemoPage/UseMemo";
// import Shopping from "./pages/ReactMemoPage/Shopping";

import PortalPage from "./pages/PortalPage/PortalPage";
import PortalPage1 from "./pages/PortalPage/PortalPage1";

import PortalPage2 from "./pages/PortalPage/PortalPage2";

import Student1 from "./pages/Eventhandlerpage/Student1";
import EmployeePage from "./pages/List_Rendering/EmployeePage";
import ProductPage from "./pages/List_Rendering/ProductPage";
import StudentRegistration2 from "./Eventhandler/StudentRegistration2";
import StudentPage from "./pages/List_Rendering/StudentPage";
import HomePage from "./pages/List_Rendering/Homepage";
// import NotFound from "./pages/routers/NotFound";
// import Contact from "./pages/routers/Contact";
// import StudentDetails from "./pages/routers/StudentDetails";
// import Students from "./pages/routers/Students";
// import Home from "./pages/routers/Home";
// import NavBar1 from "./pages/Router/NavBar1";

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
import NotFound from "./Routers_04-08-2026/NotFound";
import ProtectedRoute from "./Routers_04-08-2026/ProtectedRoute";




function App() {
   const isLoggedIn = true;
  return (
    <BrowserRouter>

    <h1>Student Management System</h1>

<nav>
  <NavLink to="/">Home</NavLink> |{" "}
  <NavLink to="/about">About</NavLink> |{" "}
  <NavLink to="/contact">Contact</NavLink> |{" "}
  <NavLink to="/products">Products</NavLink> |{" "}
  <NavLink to="/dashboard">Dashboard</NavLink> |{" "}
  <NavLink to="/login">Login</NavLink>
</nav>

<hr />


      <Routes>


        {/* Home
        <Route path="/FetchApi2" element={<FetchApi2 />} /> */}

        {/* Components */}
        <Route path="/components" element={<ComponentsPage />} />

        {/* Props */}
        <Route path="/props" element={<PropsPage />} />

        {/* State Management */}
        <Route
          path="/statemanagment"
          element={<StatemanagmentPage />}
        />

        {/* Fetch API */}
        <Route
          path="/FetchApi1"
          element={<FetchApi1 />}
        />

        <Route
          path="/FetchApi2"
          element={<FetchApi2 />}
        />


        {/* Context API */}
        <Route
          path="/ContextApp"
          element={<ContextApp />}
        />

        {/* Redux */}
        <Route
          path="/Redux"
          element={<Redux />}
        />

        {/* Conditional Rendering */}
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

        {/* Event Handling */}
        <Route
          path="/OnClick"
          element={<OnClick />}
        />

        <Route
          path="/OnDoubleClickEvent"
          element={<OnDoubleClickEventPage />}
        />

        {/* Controlled Components */}
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

        {/* useEffect */}
        <Route
          path="/UseEffect1"
          element={<UseEffect />}
        />

      

        {/* Complete Revision */}
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


    

      
        <Route
          path="Hook"
          element={<Hook />}
        />
        <Route
          path="UseFrom"
          element={<UseFrom />}
        />

          <Route
          path="WindowSize1"
          element={<WindowSize1 />}
        />
            {/* <Route
          path="AppPage"
          element={<AppPage/>}
        />
              
                 <Route
          path="EmployeePage"
          element={<EmployeePage/>} */}
      
                     {/* <Route
          path="ReactMemoPage"
          element={<ReactMemoPage/>}
        /> */}
                      {/* <Route
          path="ReactMemoPage"
          element={<ReactMemoPage/>}
        />
                            <Route
          path="UseMemo"
          element={<UseMemo/>}
        />

                       <Route
          path="Shopping"
          element={<Shopping/>}
        /> */}
      
                         <Route
          path="PortalPage"
          element={<PortalPage/>}
        />
                         <Route
          path="PortalPage1"
          element={<PortalPage1/>}
        />
                         <Route
          path="PortalPage2"
          element={<PortalPage2/>}
        />
       
                       <Route
          path="Student1"
          element={<Student1/>}
        />

                         <Route
          path="EmployeePage"
          element={<EmployeePage/>}
        />
                        <Route
          path="Productpage"
          element={<ProductPage/>}
        />
                        <Route
          path="Studentpage"
          element={<StudentPage/>}
        />

                      <Route
          path="Homepage"
          element={<HomePage/>}
        />

{/* 
           <Route path="/Home" element={<Home />} />

                <Route path="/students" element={<Students />} />

                <Route
                    path="/students/:id"
                    element={<StudentDetails />}
                       />

                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} /> */}




  <Route path="/" element={<Home />} />

  <Route path="/about" element={<About />} />

  <Route path="/contact" element={<Contact />} />

  <Route path="/login" element={<Login />} />

  <Route path="/products" element={<Products />} />

  <Route path="/product/:id" element={<ProductDetails />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Dashboard />
      </ProtectedRoute>
    }
  >
    <Route path="profile" element={<Profile />} />
    <Route path="orders" element={<Orders />} />
    <Route path="settings" element={<Settings />} />
  </Route>

  <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  );
}


export default App;