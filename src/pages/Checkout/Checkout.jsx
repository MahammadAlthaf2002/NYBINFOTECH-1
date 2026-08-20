import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  function submit(e) { e.preventDefault(); setDone(true); clear(); }

  if (done) return <div className="successState"><div>✓</div><h1>Order placed successfully</h1><p>This is a development checkout flow.</p><button onClick={()=>navigate("/")}>Back to NYB Home</button></div>;

  return <div className="checkoutPage"><button className="backLink" onClick={()=>navigate("/cart")}>← Back to cart</button><div className="checkoutLayout"><form onSubmit={submit} className="checkoutForm"><span>CHECKOUT</span><h1>Delivery details</h1><label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Phone<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></label><label>Address<textarea required value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/></label><button type="submit" disabled={!items.length}>Place order →</button></form><aside className="checkoutSummary"><span>ORDER TOTAL</span><h2>₹{total.toLocaleString("en-IN")}</h2><p>{items.length} item(s)</p><small>Secure development checkout</small></aside></div></div>;
}
