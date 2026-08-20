import { Link } from "react-router-dom";

const nav = [
  ["⌂", "Home", "/"],
  ["🛍️", "Shopping", "/compare/shopping"],
  ["🍔", "Food Delivery", "/compare/food"],
  ["🎬", "Movies & Tickets", "/compare/movies"],
  ["💊", "Medicine & Health", "/compare/medicine"],
  ["✈️", "Flights & Hotels", "/compare/flights"],
  ["🚌", "Bus & Travel", "/compare/travel"],
  ["▣", "Recharge & Bills", "/compare/recharge"],
  ["🛒", "Groceries", "/compare/groceries"]
];

const quick = [
  ["🏦", "Banking & Finance"], ["☂", "Insurance"], ["🎓", "Education"],
  ["🎁", "Gift Cards"], ["🎉", "Events & Fun"], ["🏛️", "Government Services"]
];

export default function Sidebar() {
  return <aside className="leftSidebar">
    <nav className="sideNav">
      {nav.map(([icon, label, to], i) => <Link key={label} className={i === 0 ? "active" : ""} to={to}><span>{icon}</span>{label}{label === "Banking & Finance" && <em>NEW</em>}</Link>)}
    </nav>
    <div className="sideLabel">EXPLORE</div>
    <nav className="sideNav">
      {quick.map(([icon, label]) => <Link key={label} to="/compare"><span>{icon}</span>{label}{label === "Banking & Finance" && <em>NEW</em>}</Link>)}
    </nav>
    <div className="premiumCard">
      <div className="premiumIcon">♛</div>
      <strong>NYB Premium</strong>
      <small>Unlock Unlimited Benefits</small>
      <p>✓ Free Delivery</p><p>✓ Extra Discounts</p><p>✓ Priority Support</p><p>✓ Early Access</p>
      <button>Upgrade Now</button>
    </div>
  </aside>;
}
