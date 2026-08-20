import { useCallback, useMemo, useRef, useState, lazy, Suspense } from 'react';
import { products } from './data/products';
import ProductGrid from './components/ProductGrid';
import OptimizationPanel from './components/OptimizationPanel';
import ConceptBadge from './components/ConceptBadge';
const LazyAnalytics=lazy(()=>import('./pages/LazyAnalytics'));
export default function App(){
 const [query,setQuery]=useState(''); const [cart,setCart]=useState([]); const [theme,setTheme]=useState('dark'); const [showAnalytics,setShowAnalytics]=useState(false);
 const renderRef=useRef(0); const filterRef=useRef(0); renderRef.current+=1;
 const filtered=useMemo(()=>{filterRef.current+=1; const q=query.toLowerCase(); return products.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q))},[query]);
 const addToCart=useCallback((product)=>setCart(c=>[...c,product]),[]);
 const toggleTheme=useCallback(()=>setTheme(t=>t==='dark'?'light':'dark'),[]);
 return <main className={theme==='dark'?'app':'app light'}><header><div><span className="eyebrow">MEDIUM PROJECT · PERFORMANCE LAB</span><h1>React Optimization Studio</h1><p>Interact with the dashboard and see exactly where each optimization concept is used.</p></div><div className="header-actions"><button className="ghost" onClick={toggleTheme}>Toggle UI</button><button className="cart">Cart {cart.length}</button></div></header>
 <section className="concept-strip"><ConceptBadge name="React.memo" purpose="Stops unchanged product cards from rendering again."/><ConceptBadge name="useMemo" purpose="Caches filtered products until search changes."/><ConceptBadge name="useCallback" purpose="Keeps the Add to Cart function reference stable."/><ConceptBadge name="Lazy Loading" purpose="Analytics is loaded only when opened."/><ConceptBadge name="Code Splitting" purpose="LazyAnalytics becomes a separate bundle chunk."/></section>
 <section className="toolbar"><div><label>Product Search</label><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search mobile, laptop, audio..."/><small><strong>useMemo in action:</strong> filtering runs only when this search value changes.</small></div><button className="primary" onClick={()=>setShowAnalytics(v=>!v)}>{showAnalytics?'Close Analytics':'Open Analytics'}</button></section>
 <div className="content"><section><div className="section-title"><div><h2>Memoized Product Cards</h2><p>Toggle the UI theme. Product cards receive the same props and can skip unnecessary re-renders.</p></div><span>{filtered.length} results</span></div><ProductGrid items={filtered} onAdd={addToCart}/></section><OptimizationPanel renderCount={renderRef.current} filterRuns={filterRef.current}/></div>
 {showAnalytics&&<Suspense fallback={<section className="loading">Loading Analytics component...</section>}><LazyAnalytics cart={cart}/></Suspense>}
 <footer><strong>Try this:</strong> Toggle UI → React.memo helps child cards. Search → useMemo recalculates. Add item → useCallback keeps handler stable. Open Analytics → Lazy Loading + Code Splitting.</footer></main>
}
