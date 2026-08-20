import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { compareProduct } from "../../services/api";
import { findProduct } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function Compare() {
  const { category } = useParams();
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const initial = params.get("query") || params.get("q") || "";
  const [input, setInput] = useState(initial);
  const [result, setResult] = useState(() => {
    const p = findProduct(initial || "iphone");
    return { ...p, providers: p.providers };
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lowest = useMemo(() => Math.min(...result.providers.map((p) => p.price)), [result]);
  const highest = useMemo(() => Math.max(...result.providers.map((p) => p.price)), [result]);
  const savings = highest - lowest;

  async function runCompare(e) {
    e?.preventDefault();
    if (!input.trim()) return;
    setLoading(true); setError("");
    try {
      const data = await compareProduct(input.trim());
      setResult(data.product);
      navigate(`/compare?query=${encodeURIComponent(input.trim())}`, { replace: true });
    } catch {
      setError("Could not reach the comparison API. Showing development data instead.");
      setResult(findProduct(input));
    } finally { setLoading(false); }
  }

  useEffect(() => {
    if (location.search && initial) runCompare();
  }, []);

  return <div className="comparePage">
    <div className="compareHeader"><div><span>SMART COMPARISON</span><h1>Find the Best Price</h1><p>Compare available marketplace offers in one place.</p></div><button onClick={() => navigate("/")}>← Home</button></div>
    <form className="compareInput" onSubmit={runCompare}><span>⌕</span><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste a product URL or search for a product..." /><button disabled={loading}>{loading ? "Comparing..." : "Compare →"}</button></form>
    {error && <div className="notice">{error}</div>}

    <section className="resultTop">
      <div className="resultProduct"><div className="bigProductImage"><img src={result.image}/></div><div><span>{result.category}</span><h2>{result.name}</h2><p>⭐ {result.rating} · {result.reviews.toLocaleString()} reviews</p><button onClick={() => navigate(`/product?name=${encodeURIComponent(result.name)}`)}>Open product</button></div></div>
      <div className="priceSummary"><span>LOWEST AVAILABLE</span><strong>₹{lowest.toLocaleString("en-IN")}</strong><small>Best current offer</small><div>Across {result.providers.length} providers</div></div>
      <div className="savingSummary"><span>POTENTIAL SAVINGS</span><strong>₹{savings.toLocaleString("en-IN")}</strong><small>vs highest listed price</small></div>
    </section>

    <section className="providersSection"><div className="sectionHeader"><div><span>PRICE COMPARISON</span><h2>Available Providers</h2></div><small>Updated just now</small></div>
      <div className="providerList">{[...result.providers].sort((a,b)=>a.price-b.price).map((p,i) => <div className={`providerCard ${p.price===lowest?"best":""}`} key={p.name}><b>#{i+1}</b><div className="providerLogo">{p.name[0]}</div><div className="providerInfo"><strong>{p.name}</strong><span>⭐ {p.rating}</span><small>{p.delivery}</small></div><div className="providerPrice"><small>PRICE</small><strong>₹{p.price.toLocaleString("en-IN")}</strong></div>{p.price===lowest && <em>🏆 LOWEST</em>}<a href={p.url || "#"} target="_blank" rel="noreferrer">View Deal →</a></div>)}</div>
    </section>

    <div className="compareBottom"><div><span>PRICE HISTORY</span><h2>Is this a good time to buy?</h2><p>Historical pricing will be connected when a permitted price-history provider is added.</p></div><div className="historyBoxes"><span>LOWEST EVER<strong>₹54,999</strong></span><span>CURRENT LOWEST<strong>₹{lowest.toLocaleString("en-IN")}</strong></span><span>CHANGE<strong>+9.1%</strong></span></div></div>
    <button className="addCompareCart" onClick={() => addItem({ ...result, price: lowest })}>Add best-price item to cart</button>
  </div>;
}
