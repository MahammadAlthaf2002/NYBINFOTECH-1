import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { rightServices } from "../../data/categories";

const serviceSlugs = { "Doctor Consult": "doctor", "Lab Tests": "labs", "COVID Care": "covid", "Find Nearby": "nearby", "Donate": "donate", "More Services": "more" };

export default function RightSidebar() {
  const { items, total } = useCart();
  const navigate = useNavigate();
  const shown = items.length ? items.slice(0, 3) : [
    { name: "Nike Air Max", price: 6499, quantity: 1, icon: "👟" },
    { name: "Domino's Pizza", price: 249, quantity: 1, icon: "🍕" },
    { name: "Paracetamol 650mg", price: 20, quantity: 2, icon: "💊" }
  ];
  const amount = items.length ? total : 7088;

  return <aside className="rightSidebar">
    <section className="memberCard">
      <div className="memberTop"><span className="memberAvatar">A</span><div><strong>Hi, Althaf 👋</strong><small>Premium Member</small></div><button className="crown" onClick={() => navigate("/service/premium")}>♛</button></div>
      <div className="stats"><button onClick={() => navigate("/service/shopping")}>Orders<b>12</b></button><button onClick={() => navigate("/service/shopping")}>Wishlist<b>8</b></button><button onClick={() => navigate("/service/shopping")}>Coupons<b>5</b></button><button onClick={() => navigate("/service/premium")}>Points<b>250</b></button></div>
    </section>

    <section className="cartMini">
      <div className="sectionTitle"><strong>My Cart</strong> <span>({shown.length} items)</span><Link to="/cart">View Cart</Link></div>
      {shown.map((item) => <div className="miniItem" key={item.name}><div className="miniImg">{item.icon}</div><div><strong>{item.name}</strong><span>₹{item.price.toLocaleString("en-IN")}</span></div><small>Qty: {item.quantity}</small></div>)}
      <div className="miniTotal"><span>Total Amount</span><strong>₹{amount.toLocaleString("en-IN")}</strong></div>
      <Link className="checkoutMini" to="/checkout">Proceed to Checkout →</Link>
    </section>

    <section className="aiCard">
      <div className="aiHead"><div><strong>◉ AI Assistant</strong><small>Powered by NYB AI</small></div><div className="bot">🤖</div></div>
      <div className="online">● Online</div>
      <div className="chatBubble">Hi Althaf! 👋<br/><span>How can I help you today?</span></div>
      <div className="chatChips"><button onClick={() => navigate("/service/shopping")}>Track my order</button><button onClick={() => navigate("/compare/shopping")}>Best offers for me</button><button onClick={() => navigate("/service/medicine")}>Medicine info</button></div>
      <button className="chatInput" onClick={() => navigate("/service/more")}>Type your message... <b>➤</b></button>
    </section>

    <section className="rightServices">
      {rightServices.map(([icon, name, sub]) => <Link to={`/service/${serviceSlugs[name] || "more"}`} key={name}><span>{icon}</span><strong>{name}</strong><small>{sub}</small></Link>)}
    </section>
  </aside>;
}
