import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { items, changeQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="page">
      <Header />
      <main className="cartPage">
        <button className="backButton" onClick={() => navigate(-1)}><ArrowLeft size={16}/> Continue Shopping</button>
        <div className="pageTitle">
          <span className="eyebrow">YOUR SELECTION</span>
          <h1>Shopping Cart</h1>
          <p>{items.length} product type{items.length !== 1 ? "s" : ""} in your cart</p>
        </div>

        {items.length === 0 ? (
          <div className="emptyState">
            <div>🛒</div>
            <h2>Your cart is empty</h2>
            <button className="primaryButton" onClick={() => navigate("/")}>Explore Products</button>
          </div>
        ) : (
          <div className="cartLayout">
            <section className="cartItems">
              {items.map(item => (
                <article className="cartItem" key={item.id}>
                  <div className="cartProductImage">{item.icon}</div>
                  <div className="cartProductInfo">
                    <span>{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>Best available price from <b>{item.seller}</b></p>
                    <button className="removeButton" onClick={() => removeFromCart(item.id)}><Trash2 size={14}/> Remove</button>
                  </div>
                  <div className="quantityControl">
                    <button onClick={() => changeQuantity(item.id, -1)}><Minus size={14}/></button>
                    <b>{item.quantity}</b>
                    <button onClick={() => changeQuantity(item.id, 1)}><Plus size={14}/></button>
                  </div>
                  <div className="cartPrice">
                    <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                    <small>₹{item.price.toLocaleString("en-IN")} each</small>
                  </div>
                </article>
              ))}
            </section>

            <aside className="cartSummary">
              <span className="eyebrow">ORDER SUMMARY</span>
              <h2>Price Details</h2>
              <div className="summaryRow"><span>Items</span><b>{items.reduce((s,i)=>s+i.quantity,0)}</b></div>
              <div className="summaryRow"><span>Subtotal</span><b>₹{subtotal.toLocaleString("en-IN")}</b></div>
              <div className="summaryRow"><span>Delivery</span><b className="green">FREE</b></div>
              <hr />
              <div className="totalRow"><span>Total</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
              <button className="primaryButton full" onClick={() => navigate("/checkout")}>Proceed to Checkout →</button>
              <small className="secureText">🔒 Secure checkout</small>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}