import { memo } from 'react';
import ProductCard from './ProductCard';
function ProductGrid({items,onAdd}){console.log('ProductGrid render'); return <div className="grid">{items.map(p=><ProductCard key={p.id} product={p} onAdd={onAdd}/>)}</div>}
export default memo(ProductGrid);
