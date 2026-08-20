import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../component/CartItem";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {

  const items = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cartPage container">
      <div className="pageIntro"><p className="eyebrow">Your bag</p><h1>Shopping cart</h1><p>{items.length ? `${items.length} item${items.length > 1 ? "s" : ""} ready to check out` : "Your selected items will appear here."}</p></div>
      {items.length === 0 ? <section className="emptyCart"><h2>Your cart is waiting.</h2><p>Add something you love from our curated collection.</p><Link className="primaryButton" to="/redux-cart/products">Continue shopping</Link></section> : <div className="cartLayout"><section className="cartItems">{items.map(item => <CartItem key={item.id} item={item} />)}</section><aside className="orderSummary"><h2>Order summary</h2><div><span>Subtotal</span><strong>Rs. {total.toLocaleString("en-IN")}</strong></div><div><span>Delivery</span><strong>Free</strong></div><div className="summaryTotal"><span>Total</span><strong>Rs. {total.toLocaleString("en-IN")}</strong></div><button className="checkoutButton">Secure checkout</button><button className="clearButton" onClick={() => dispatch(clearCart())}>Clear cart</button></aside></div>}
    </main>
  );
};

export default Cart;
