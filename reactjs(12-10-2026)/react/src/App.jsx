
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
  Outlet,
  useSearchParams,
  Navigate,
} from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to React Router Practice!</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

// About Page
function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

// Dynamic Route
function Student() {
  const { id } = useParams();

  return <h2>Student ID: {id}</h2>;
}

// Query Parameters
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  return (
    <div>
      <h2>Products Page</h2>
      <p>Category: {category}</p>

      <button onClick={() => setSearchParams({ category: "shoes" })}>
        Shoes
      </button>

      <button onClick={() => setSearchParams({ category: "shirts" })}>
        Shirts
      </button>
    </div>
  );
}

// Nested Routes
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link>{" | "}
      <Link to="settings">Settings</Link>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h3>Profile Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

// Login Page
function Login({ onLogin }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

// Protected Route
function ProtectedRoute({ isLoggedIn }) {
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

// 404 Page
function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// Main App
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>React Router Practice</h1>

      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>{" | "}
        <NavLink to="/student/101">Student</NavLink>{" | "}
        <NavLink to="/products">Products</NavLink>{" | "}
        <NavLink to="/dashboard">Dashboard</NavLink>{" | "}
        <NavLink to="/login">Login</NavLink>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/products" element={<Products />} />

        <Route
          path="/login"
          element={
            <Login onLogin={() => setIsLoggedIn(true)} />
          }
        />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
