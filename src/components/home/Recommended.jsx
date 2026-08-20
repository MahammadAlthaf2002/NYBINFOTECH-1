import { Link } from "react-router-dom";
import { featuredProducts } from "../../data/products";

export default function Recommended() {
  return <section className="homeSection"><div className="sectionHeader"><div><h2>Recommended For You</h2><small>Based on your activity</small></div><button>View All</button></div><div className="productRow">
    {featuredProducts.map((p) => <Link className="smallProduct" to={`/product?name=${encodeURIComponent(p.name)}`} key={p.id}><div className="smallProductImage"><img src={p.image}/></div><span>♡</span><strong>{p.name}</strong><small>₹{p.price.toLocaleString("en-IN")}</small><em>★ {p.rating}</em></Link>)}
  </div></section>;
}
