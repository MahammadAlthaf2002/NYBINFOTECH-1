import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="profile" element={<Profile />} />

            <Route path="settings" element={<Settings />} />
          </Route>

          <Route
            path="/students"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <StudentList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/students/:id"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <StudentDetails />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;