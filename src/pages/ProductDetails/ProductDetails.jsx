import { useSearchParams, useNavigate } from "react-router-dom";
import { findProduct } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = findProduct(params.get("name") || "iphone");
  const lowest = Math.min(...product.providers.map(p => p.price));
  const highest = Math.max(...product.providers.map(p => p.price));

  return <div className="productDetails">
    <button className="backLink" onClick={() => navigate(-1)}>← Back</button>
    <div className="productHero"><div className="productLarge"><img src={product.image}/></div><div className="productInfoMain"><span>{product.category}</span><h1>{product.name}</h1><p>⭐ {product.rating} · {product.reviews.toLocaleString()} reviews</p><h2>₹{lowest.toLocaleString("en-IN")}</h2><small>Lowest available price</small><p className="desc">{product.description}</p><div className="productActions"><button onClick={() => addItem({ ...product, price: lowest })}>Add to Cart</button><button onClick={() => navigate(`/compare?query=${encodeURIComponent(product.name)}`)}>Compare Prices</button></div></div></div>
    <section className="detailPanel"><h2>Price comparison</h2>{product.providers.map(p => <div className="detailProvider" key={p.name}><span>{p.name}</span><strong>₹{p.price.toLocaleString("en-IN")}</strong><small>{p.price===lowest?"🏆 Lowest":"Available offer"}</small></div>)}</section>
    <section className="detailPanel"><h2>Price spread</h2><p>Highest listed price: ₹{highest.toLocaleString("en-IN")}</p><p>You can save up to ₹{(highest-lowest).toLocaleString("en-IN")} by choosing the current lowest offer.</p></section>
  </div>;
}
