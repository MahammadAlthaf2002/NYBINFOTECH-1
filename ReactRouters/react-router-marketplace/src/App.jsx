import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; import Footer from "./components/Footer"; import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home"; import Products from "./pages/Products"; import ProductDetails from "./pages/ProductDetails"; import About from "./pages/About"; import Login from "./pages/Login"; import Dashboard from "./pages/Dashboard"; import DashboardHome from "./pages/DashboardHome"; import Profile from "./pages/Profile"; import Settings from "./pages/Settings"; import NotFound from "./pages/NotFound";
export default function App(){return <div className="app-shell"><Navbar/><main className="container"><Routes>
<Route path="/" element={<Home/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/products/:id" element={<ProductDetails/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
<Route index element={<DashboardHome/>}/><Route path="profile" element={<Profile/>}/><Route path="settings" element={<Settings/>}/>
</Route>
<Route path="*" element={<NotFound/>}/>
</Routes></main><Footer/></div>}