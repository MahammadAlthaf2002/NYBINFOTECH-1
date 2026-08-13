import { useContext, useMemo } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    removeFromCart
  } = useContext(CartContext);

  const total = useMemo(() => {

    return cart.reduce(
      (sum, item) => sum + item.price,
      0
    );

  }, [cart]);

  return (
    <div>

      <h1>🛒 Your Cart</h1>

      {cart.length === 0 && (
        <p>Your cart is empty.</p>
      )}

      {cart.map((item) => (

        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>

      ))}

      <h2>
        Total: ₹{total}
      </h2>

    </div>
  );
}

export default Cart;