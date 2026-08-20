import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { items, increase, decrease, remove, total } = useCart();
  const navigate = useNavigate();

  return <div className="cartPage"><div className="pageTitle"><span>NYB CART</span><h1>Your selected products</h1></div>
    {!items.length ? <div className="emptyState"><div>🛒</div><h2>Your cart is empty</h2><p>Add a best-price product from comparison.</p><Link to="/">Back to Home</Link></div> :
    <div className="cartLayout"><section className="cartList">{items.map(item => <div className="cartItem" key={item.id}><div className="cartImg"><img src={item.image}/></div><div className="cartInfo"><span>{item.category}</span><h2>{item.name}</h2><p>Best available price</p><button onClick={() => remove(item.id)}>Remove</button></div><div className="quantity"><button onClick={()=>decrease(item.id)}>−</button><b>{item.quantity}</b><button onClick={()=>increase(item.id)}>+</button></div><strong>₹{(item.price*item.quantity).toLocaleString("en-IN")}</strong></div>)}</section>
    <aside className="cartSummaryLarge"><span>ORDER SUMMARY</span><h2>Price Details</h2><p><span>Items</span><b>{items.length}</b></p><p><span>Subtotal</span><b>₹{total.toLocaleString("en-IN")}</b></p><p><span>Delivery</span><b className="free">FREE</b></p><hr/><h2><span>Total</span><b>₹{total.toLocaleString("en-IN")}</b></h2><button onClick={()=>navigate("/checkout")}>Proceed to Checkout →</button></aside></div>}
  </div>;
}
