import { Link, useNavigate } from "react-router-dom";
export default function ProductCard({product}){
 const navigate=useNavigate();
 return <article className="card"><div className="product-icon">{product.icon}</div><p className="tag">{product.category}</p><h3>{product.name}</h3><p className="muted">⭐ {product.rating}</p><strong>{product.price}</strong><div className="card-actions">
 <Link className="btn secondary" to={`/products/${product.id}`}>View with Link</Link>
 <button className="btn" onClick={()=>navigate(`/products/${product.id}`)}>View with useNavigate</button>
 </div></article>
}