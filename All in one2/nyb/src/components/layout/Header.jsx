import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Icon from '../ui/Icon';
import {useCart} from '../../context/CartContext';

export default function Header(){
 const nav=useNavigate(); const {count}=useCart(); const [q,setQ]=useState(''); const [open,setOpen]=useState(false);
 const logged=Boolean(localStorage.getItem('nyb_user')); let user={name:'Guest'};
 try{user=JSON.parse(localStorage.getItem('nyb_user'))||user}catch{}
 const search=()=>{if(q.trim())nav(`/compare/search?q=${encodeURIComponent(q.trim())}`)};
 return <header className="header">
  <button className="mobileMenu" aria-label="Open services" onClick={()=>nav('/service/more')}><Icon name="menu"/></button>
  <div className="search"><Icon name="search" size={19}/><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&search()} placeholder="Search phones, food, medicines, flights, services..."/><button onClick={search}>Search</button></div>
  <div className="headerActions">
   <button className="supportBtn" onClick={()=>nav('/service/more')}><Icon name="support"/><span><b>Support</b><small>24/7 help</small></span></button>
   <button className="iconBtn" onClick={()=>nav('/service/more')} aria-label="Notifications"><Icon name="bell"/><i>3</i></button>
   <button className="iconBtn" onClick={()=>nav('/cart')} aria-label="Cart"><Icon name="cart"/><i>{count}</i></button>
   <div className="account" onClick={()=>setOpen(v=>!v)}><div className="avatar">{user.name?.[0]?.toUpperCase()||'G'}</div><div><b>{logged?user.name:'Guest'}</b><small>{logged?'Signed in':'Login / Register'}</small></div><Icon name="chevron" size={15}/>{open&&<div className="accountMenu"><button onClick={()=>nav(logged?'/account':'/auth/login')}>{logged?'My account':'Login / Register'}</button><button onClick={()=>nav('/cart')}>My cart ({count})</button><button onClick={()=>nav('/service/premium')}>NYB Premium</button></div>}</div>
  </div>
 </header>
}
