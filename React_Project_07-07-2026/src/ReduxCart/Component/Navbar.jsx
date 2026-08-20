import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.user.user);

  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">

      <Link className="brand" to="/redux-cart">Smart<span>Cart</span></Link>

      <div className="navLinks">
        <Link to="/redux-cart">Home</Link>
        <Link to="/redux-cart/products">Products</Link>
        <Link to="/redux-cart/cart">
          Cart <span className="cartCount">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
        </Link>

        <Link to="/redux-cart/profile">
          {user ? user.name : "Login"}
        </Link>

        <button onClick={toggleTheme}>
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
