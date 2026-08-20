import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { subtotal, items, clearCart } = useCart();

  const placeOrder = e => {
    e.preventDefault();
    clearCart();
    alert("Demo order placed successfully!");
    navigate("/");
  };

  return (
    <div className="page">
      <Header />
      <main className="checkoutPage">
        <button className="backButton" onClick={() => navigate("/cart")}><ArrowLeft size={16}/> Back to Cart</button>
        <div className="checkoutGrid">
          <form className="checkoutCard" onSubmit={placeOrder}>
            <span className="eyebrow">SECURE CHECKOUT</span>
            <h1>Complete your order</h1>
            <label>Full name<input required placeholder="Your name" /></label>
            <label>Phone number<input required inputMode="tel" placeholder="+91 XXXXX XXXXX" /></label>
            <label>Delivery address<textarea required rows="4" placeholder="Address" /></label>
            <label>Payment method<select><option>Cash / Demo Payment</option><option>UPI (integration later)</option></select></label>
            <button className="primaryButton full" type="submit"><CheckCircle size={17}/> Place Demo Order</button>
          </form>
          <aside className="cartSummary checkoutSummary">
            <span className="eyebrow">ORDER</span>
            <h2>{items.length} product type{items.length !== 1 ? "s" : ""}</h2>
            <div className="totalRow"><span>Total</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          </aside>
        </div>
      </main>
    </div>
  );
}