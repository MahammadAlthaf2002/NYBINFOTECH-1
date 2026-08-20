import { ArrowLeft, RefreshCw, Search, TrendingDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import Header from "../components/Header";
import PriceCard from "../components/PriceCard";
import { compareProduct } from "../services/api";
import { demoProducts } from "../data/products";

export default function Compare() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const { category } = useParams();
  const initial = params.get("q") || (category === "iphone" ? "iPhone 16" : "");
  const [input, setInput] = useState(initial);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const runCompare = async value => {
    const clean = value.trim();
    if (!clean) return;
    setInput(clean);
    setParams({ q: clean });
    setLoading(true);
    setError("");

    try {
      const data = await compareProduct(clean);
      setResult(data);
    } catch {
      // Frontend demo fallback. Replace with backend/API integration in production.
      const lower = clean.toLowerCase();
      const demo = lower.includes("samsung")
        ? demoProducts.samsung
        : lower.includes("sony") || lower.includes("headphone")
          ? demoProducts.sony
          : demoProducts.iphone;

      setResult({
        source: "demo",
        product: demo,
        offers: demo.prices
      });
      setError("Backend comparison service is not connected, so demo comparison data is shown.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initial) runCompare(initial);
  }, []);

  const offers = useMemo(() => {
    const list = result?.offers || [];
    return [...list].sort((a, b) => a.price - b.price).map((offer, i) => ({ ...offer, rank: i + 1 }));
  }, [result]);

  const lowest = offers[0]?.price || 0;
  const highest = offers.at(-1)?.price || 0;
  const saving = Math.max(0, highest - lowest);

  return (
    <div className="page">
      <Header searchValue={input} onSearchChange={setInput} />
      <main className="comparePage">
        <div className="compareTop">
          <button className="backButton" onClick={() => navigate(-1)}><ArrowLeft size={16}/> Back</button>
          <span className="eyebrow">SMART COMPARISON ENGINE</span>
          <span className="livePill"><i /> Ready</span>
        </div>

        <section className="compareSearch">
          <Search size={19}/>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && runCompare(input)}
            placeholder="Paste a product URL or enter a product name"
          />
          <button className="primaryButton" onClick={() => runCompare(input)}>
            {loading ? <><RefreshCw className="spin" size={16}/> Comparing</> : <>Compare</>}
          </button>
        </section>

        {error && <div className="notice">{error}</div>}

        {!result && !loading && (
          <div className="emptyState">
            <div>🔎</div>
            <h1>What do you want to compare?</h1>
            <p>Paste a product URL or search for a product name.</p>
          </div>
        )}

        {result && (
          <>
            <section className="resultHeader">
              <div>
                <span className="eyebrow">COMPARISON RESULT</span>
                <h1>{result.product?.name || input}</h1>
                <p>{result.product?.description || "Comparing available providers."}</p>
              </div>
              <button className="secondaryButton" onClick={() => runCompare(input)}>
                <RefreshCw size={15}/> Refresh
              </button>
            </section>

            <section className="summaryGrid">
              <div className="summaryCard best">
                <span>🏆 LOWEST PRICE</span>
                <strong>₹{lowest.toLocaleString("en-IN")}</strong>
                <small>Best available result</small>
              </div>
              <div className="summaryCard">
                <span>📈 HIGHEST PRICE</span>
                <strong>₹{highest.toLocaleString("en-IN")}</strong>
                <small>Highest compared offer</small>
              </div>
              <div className="summaryCard saving">
                <span><TrendingDown size={14}/> POTENTIAL SAVING</span>
                <strong>₹{saving.toLocaleString("en-IN")}</strong>
                <small>Difference between offers</small>
              </div>
            </section>

            <section className="providersSection">
              <div className="sectionHeader">
                <div>
                  <span className="eyebrow">PRICE COMPARISON</span>
                  <h2>Available Providers</h2>
                </div>
                <small>{offers.length} providers compared</small>
              </div>
              <div className="providerList">
                {offers.map((offer, i) => (
                  <PriceCard key={offer.store} offer={offer} best={i === 0} />
                ))}
              </div>
            </section>

            <div className="disclaimer">
              <strong>Important:</strong> This project currently uses a demo backend dataset.
              Real marketplace prices require permitted marketplace APIs/feeds or compliant
              partner integrations. Do not scrape a site just by sending a browser request.
            </div>
          </>
        )}
      </main>
    </div>
  );
}