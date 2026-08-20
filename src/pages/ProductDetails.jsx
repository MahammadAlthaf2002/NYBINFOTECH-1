import { useMemo } from "react";
import { ArrowLeft, ShoppingCart, ExternalLink } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { demoProducts } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const search = (params.get("name") || "iPhone 16").toLowerCase();

  const product = search.includes("samsung")
    ? demoProducts.samsung
    : search.includes("sony") || search.includes("headphone")
      ? demoProducts.sony
      : demoProducts.iphone;

  const { addToCart } = useCart();
  const lowest = useMemo(() => Math.min(...product.prices.map(x => x.price)), [product]);
  const best = product.prices.find(x => x.price === lowest);

  return (
    <div className="page">
      <Header />
      <main className="productDetails">
        <button className="backButton" onClick={() => navigate(-1)}><ArrowLeft size={16}/> Back</button>

        <section className="productHero">
          <div className="largeProductImage">{product.icon}</div>

          <div className="productMainInfo">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <div className="ratingLine">⭐ {product.rating} · {product.reviews.toLocaleString()} reviews · ✓ Verified demo data</div>
            <p>{product.description}</p>

            <div className="bestPriceBox">
              <span>LOWEST AVAILABLE PRICE</span>
              <strong>₹{lowest.toLocaleString("en-IN")}</strong>
              <small>Best result: {best.store}</small>
            </div>

            <div className="actionRow">
              <button
                className="secondaryButton"
                onClick={() => addToCart({ ...product, price: lowest })}
              >
                <ShoppingCart size={17}/> Add to Cart
              </button>
              <a className="primaryButton" href={best.url} target="_blank" rel="noreferrer">
                Visit Best Store <ExternalLink size={16}/>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">LIVE COMPARISON</span>
              <h2>Compare prices across platforms</h2>
            </div>
          </div>

          <div className="providerList">
            {[...product.prices].sort((a,b) => a.price-b.price).map((offer, i) => (
              <article className={i === 0 ? "providerCard bestProvider" : "providerCard"} key={offer.store}>
                <div className="providerLogo">{offer.store[0]}</div>
                <div className="providerInfo">
                  <h3>{offer.store}</h3>
                  <p>⭐ {offer.rating}</p>
                  <small>Free delivery in demo data</small>
                </div>
                <div className="providerPrice">
                  <small>PRICE</small>
                  <strong>₹{offer.price.toLocaleString("en-IN")}</strong>
                  {i === 0 && <span>LOWEST</span>}
                </div>
                <a className="secondaryButton" href={offer.url} target="_blank" rel="noreferrer">Visit <ExternalLink size={14}/></a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}