import { useMemo } from 'react';
export default function LazyAnalytics({cart}){
 const total=useMemo(()=>cart.reduce((s,p)=>s+p.price,0),[cart]);
 return <section className="lazy-page"><h2>Analytics loaded on demand ⚡</h2><div className="stats"><div><span>Cart items</span><b>{cart.length}</b></div><div><span>Cart value</span><b>₹{total.toLocaleString()}</b></div></div><p><strong>Lazy Loading + Code Splitting:</strong> this file is downloaded only after you click “Open Analytics”.</p></section>
}
