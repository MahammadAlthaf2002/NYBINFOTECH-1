import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { rightServices } from "../../data/categories";

export default function RightSidebar() {
  const { items, total } = useCart();
  const shown = items.length ? items.slice(0, 3) : [
    { name: "Nike Air Max", price: 6499, quantity: 1, icon: "👟" },
    { name: "Domino's Pizza", price: 249, quantity: 1, icon: "🍕" },
    { name: "Paracetamol 650mg", price: 20, quantity: 2, icon: "💊" }
  ];
  const amount = items.length ? total : 7088;

  return <aside className="rightSidebar">
    <section className="memberCard">
      <div className="memberTop"><span className="memberAvatar">A</span><div><strong>Hi, Althaf 👋</strong><small>Premium Member</small></div><span className="crown">♛</span></div>
      <div className="stats"><span>Orders<b>12</b></span><span>Wishlist<b>8</b></span><span>Coupons<b>5</b></span><span>Points<b>250</b></span></div>
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
      <div className="chatChips"><button>Track my order</button><button>Best offers for me</button><button>Medicine info</button></div>
      <div className="chatInput">Type your message... <b>➤</b></div>
    </section>

    <section className="rightServices">
      {rightServices.map(([icon, name, sub]) => <Link to="/compare" key={name}><span>{icon}</span><strong>{name}</strong><small>{sub}</small></Link>)}
    </section>
  </aside>;
}
