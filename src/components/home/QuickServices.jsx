const services = [["⚡","Bill Payments","Pay Electricity, Water, Gas & more"],["▣","Send Money","Instant UPI Transfers"],["💚","Mobile Recharge","Best Offers"],["🛡️","Check Insurance","Instant Policy"],["🪙","Gold Investment","Start from ₹10"]];

export default function QuickServices() {
  return <div className="quickServiceRow">{services.map(([icon,name,sub]) => <button key={name}><span>{icon}</span><div><strong>{name}</strong><small>{sub}</small></div></button>)}</div>;
}
