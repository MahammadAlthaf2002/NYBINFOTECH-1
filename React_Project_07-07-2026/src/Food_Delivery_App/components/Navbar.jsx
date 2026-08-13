import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <nav>

      <Link to="/">
        🍔 QuickBite
      </Link>

      {" | "}

      <Link to="/">
        Home
      </Link>

      {" | "}

      <Link to="/orders">
        Orders
      </Link>

      {" | "}

      <Link to="/profile">
        Profile
      </Link>

      {" | "}

      <Link to="/cart">
        Cart ({cart.length})
      </Link>

    </nav>
  );
}

export default Navbar;