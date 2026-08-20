import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { count } = useCart();

  return (
    <header className="topHeader">
      <Link to="/" className="brand">
        <div className="brandMark">N</div>
        <div><strong>NYB Infotech</strong><span>All in One Super App</span></div>
      </Link>

      <button className="menuButton" aria-label="Menu">☰</button>

      <form className="globalSearch" onSubmit={(e) => { e.preventDefault(); const q = new FormData(e.currentTarget).get("q"); if (q) navigate(`/compare?query=${encodeURIComponent(q)}`); }}>
        <span>⌕</span>
        <input name="q" placeholder="Search anything... Products, Food, Medicines, Movies, Services..." />
        <span>⌕</span>
      </form>

      <div className="headerActions">
        <button className="offerButton">✦ <span>Offers<br/><small>Hot Deals ›</small></span></button>
        <button className="supportButton">◉ <span>Support<br/><small>24/7 Help</small></span></button>
        <button className="iconButton">♧<b>5</b></button>
        <button className="iconButton" onClick={() => navigate("/cart")}>🛒<b>{count}</b></button>
        <button className="userButton"><span className="avatar">A</span><span>Althaf<br/><small>★ Premium</small></span>⌄</button>
      </div>
    </header>
  );
}
