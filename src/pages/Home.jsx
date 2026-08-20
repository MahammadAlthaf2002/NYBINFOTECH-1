import { ArrowRight, Search, ShieldCheck, Zap, TrendingDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { demoProducts } from "../data/products";

const categories = [
  ["🛒", "Shopping", "shopping"],
  ["🍔", "Food", "food"],
  ["💊", "Medicine", "pharmacy"],
  ["✈️", "Flights", "flights"],
  ["🏨", "Hotels", "hotels"],
  ["🎬", "Movies", "movies"],
  ["🔌", "Recharge", "recharge"],
  ["🏆", "More", "more"]
];

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    if (search.trim()) navigate(`/compare?q=${encodeURIComponent(search.trim())}`);
  };

  return (
    <div className="app">
      <Header searchValue={search} onSearchChange={setSearch} />

      <main>
        <section className="hero">
          <div className="heroContent">
            <span className="badge">ONE APP. INFINITE POSSIBILITIES.</span>
            <h1>Find it. <span>Compare it.</span> Save more.</h1>
            <p>
              Paste a real product link or search for a product. NYB can compare
              marketplace offers and highlight the lowest available price.
            </p>

            <form className="heroSearch" onSubmit={submit}>
              <Search size={20} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Paste product URL or type a product name..."
              />
              <button className="primaryButton">Compare <ArrowRight size={17} /></button>
            </form>

            <div className="heroHints">
              <button onClick={() => setSearch("https://www.amazon.in/")}>Try a product link</button>
              <button onClick={() => setSearch("iPhone 16")}>Try iPhone 16</button>
              <button onClick={() => setSearch("Sony WH-1000XM5")}>Try Sony XM5</button>
            </div>

            <div className="trustRow">
              <span><ShieldCheck size={17} /> Secure</span>
              <span><TrendingDown size={17} /> Best-price focus</span>
              <span><Zap size={17} /> Fast comparison</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroGlow" />
            <div className="phoneMock">
              <div className="phoneTop" />
              <div className="phoneScreen">
                <span>NYB</span>
                <strong>BEST PRICE</strong>
                <b>₹59,999</b>
                <small>4 stores compared</small>
              </div>
            </div>
            <div className="floatingOffer offerOne">Amazon <b>₹62,999</b></div>
            <div className="floatingOffer offerTwo">Flipkart <b>₹59,999</b></div>
            <div className="floatingOffer offerThree">🏆 Lowest price</div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">EXPLORE</span>
              <h2>Top Categories</h2>
            </div>
          </div>
          <div className="categoryGrid">
            {categories.map(([icon, name, type]) => (
              <button key={type} className="categoryCard" onClick={() => navigate(`/compare/${type}`)}>
                <span className="categoryIcon">{icon}</span>
                <strong>{name}</strong>
                <small>Compare prices <ArrowRight size={13} /></small>
              </button>
            ))}
          </div>
        </section>

        <section className="promoGrid section">
          <div className="promoCard promoPurple">
            <span className="eyebrow">SMART BUYING</span>
            <h3>Compare before you pay.</h3>
            <p>See multiple providers, lowest price and potential savings in one place.</p>
            <button onClick={() => navigate("/compare/iphone")}>Compare now <ArrowRight size={15}/></button>
          </div>
          <div className="promoCard promoBlue">
            <span className="eyebrow">LIVE PRODUCT INPUT</span>
            <h3>Paste the product URL.</h3>
            <p>The backend is structured for marketplace adapters and approved APIs.</p>
            <button onClick={() => document.querySelector(".heroSearch input")?.focus()}>
              Start search <ArrowRight size={15}/>
            </button>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">POPULAR</span>
              <h2>Try a comparison</h2>
            </div>
          </div>
          <div className="productGrid">
            {Object.values(demoProducts).map(product => {
              const lowest = Math.min(...product.prices.map(x => x.price));
              return (
                <article className="productCard" key={product.id}>
                  <div className="productImage">{product.icon}</div>
                  <span className="productCategory">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>⭐ {product.rating} · {product.reviews.toLocaleString()} reviews</p>
                  <div className="priceRow">
                    <strong>₹{lowest.toLocaleString("en-IN")}</strong>
                    <small>lowest</small>
                  </div>
                  <button className="compareButton" onClick={() => navigate(`/product?name=${encodeURIComponent(product.name)}`)}>
                    Open product
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer>
        <strong>NYB INFOTECH</strong>
        <span>One platform. Every need. Compare smartly.</span>
      </footer>
    </div>
  );
}