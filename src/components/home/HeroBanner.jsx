import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();
  return <section className="heroBanner">
    <div className="heroCopy">
      <p>Welcome to</p>
      <h1><span>NYB</span> Infotech</h1>
      <h3>One App. Infinite Possibilities.</h3>
      <p className="heroSub">Shop, Order, Book, Pay, Invest & Do more.<br/>Everything you need, in one secure place.</p>
      <button onClick={() => navigate("/compare/shopping")}>Explore All Services →</button>
      <div className="heroStats"><span>♙ <b>1M+</b><small>Happy Users</small></span><span>♧ <b>150+</b><small>Services</small></span><span>☆ <b>4.9 ★</b><small>User Rating</small></span><span>♧ <b>100%</b><small>Secure</small></span></div>
    </div>
    <div className="heroArt">
      <div className="city">▥ ▥ ▥ ▥ ▥ ▥</div>
      <div className="phone">NYB</div>
      <div className="floatIcon bag">🛍️</div><div className="floatIcon burger">🍔</div><div className="floatIcon plane">✈️</div><div className="floatIcon pills">💊</div><div className="floatIcon popcorn">🍿</div>
      <div className="ring"></div>
    </div>
  </section>;
}
