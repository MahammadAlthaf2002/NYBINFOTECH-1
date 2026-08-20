import { Search, ShoppingCart, Bell, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Header({ searchValue = "", onSearchChange }) {
  const navigate = useNavigate();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const submit = e => {
    e.preventDefault();
    const value = (searchValue || "").trim();
    if (value) navigate(`/compare?q=${encodeURIComponent(value)}`);
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brandMark">N</span>
        <span>
          <strong>NYB</strong>
          <small>INFOTECH</small>
        </span>
      </Link>

      <form className="globalSearch" onSubmit={submit}>
        <Search size={18} />
        <input
          value={searchValue}
          onChange={e => onSearchChange?.(e.target.value)}
          placeholder="Search product, food, medicines, movies..."
        />
      </form>

      <nav className={open ? "navLinks open" : "navLinks"}>
        <Link to="/compare/shopping" onClick={() => setOpen(false)}>Shopping</Link>
        <Link to="/compare/food" onClick={() => setOpen(false)}>Food</Link>
        <Link to="/compare/flights" onClick={() => setOpen(false)}>Flights</Link>
      </nav>

      <div className="navActions">
        <button className="iconButton desktopOnly"><Bell size={18} /></button>
        <button className="iconButton" onClick={() => navigate("/cart")}>
          <ShoppingCart size={18} />
          {count > 0 && <b className="countBadge">{count}</b>}
        </button>
        <button className="iconButton mobileMenu" onClick={() => setOpen(v => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}