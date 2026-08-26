import {
  calculateCartTotal,
  calculateItemCount,
  formatProductName
} from "../utils/productUtils";

export default function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove
}) {
  const total = calculateCartTotal(cart);
  const itemCount = calculateItemCount(cart);

  return (
    <aside className="cart">
      <h2>Cart ({itemCount})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <strong>{formatProductName(item.name)}</strong>
                <p>
                  ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
                </p>
              </div>

              <div className="cart-actions">
                <button onClick={() => onDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button
                  className="remove"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
        </>
      )}
    </aside>
  );
}
