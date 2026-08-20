import { memo } from 'react';
import ConceptBadge from './ConceptBadge';
function ProductCard({product,onAdd}){
 console.log('ProductCard render:',product.name);
 return <article className="product-card"><div className="product-icon">{product.category.slice(0,1)}</div><div className="product-main"><h3>{product.name}</h3><p>{product.category} · {product.stock} in stock</p><b>₹{product.price.toLocaleString()}</b></div><button onClick={()=>onAdd(product)}>Add</button><ConceptBadge name="React.memo" purpose="This card skips re-rendering when product and onAdd props stay the same."/></article>
}
export default memo(ProductCard);
