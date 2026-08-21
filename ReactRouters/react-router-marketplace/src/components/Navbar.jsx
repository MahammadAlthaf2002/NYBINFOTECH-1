import { NavLink } from "react-router-dom";
export default function Navbar(){
 const linkClass=({isActive})=>isActive?"nav-link active":"nav-link";
 return <header className="navbar"><NavLink to="/" className="brand">Route<span>Hub</span></NavLink><nav>
 <NavLink end to="/" className={linkClass}>Home</NavLink>
 <NavLink to="/products" className={linkClass}>Products</NavLink>
 <NavLink to="/about" className={linkClass}>About</NavLink>
 <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
 <NavLink to="/login" className={linkClass}>Login</NavLink>
 </nav></header>
}