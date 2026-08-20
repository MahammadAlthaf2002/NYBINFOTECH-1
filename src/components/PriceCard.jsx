export default function PriceCard({ offer, best }) {
  return (
    <article className={best ? "providerCard bestProvider" : "providerCard"}>
      <div className="rank">#{offer.rank}</div>
      <div className="providerLogo">{offer.store.charAt(0)}</div>
      <div className="providerInfo">
        <h3>{offer.store}</h3>
        <p>⭐ {offer.rating}</p>
        <small>{offer.delivery || "Delivery available"}</small>
      </div>
      <div className="providerPrice">
        <small>PRICE</small>
        <strong>₹{offer.price.toLocaleString("en-IN")}</strong>
        {best && <span>🏆 LOWEST</span>}
      </div>
      <a
        className="secondaryButton"
        href={offer.url}
        target="_blank"
        rel="noreferrer"
      >
        View Deal →
      </a>
    </article>
  );
}