const restaurants = [["🍔","Burger King","30–40 mins","4.3"],["🍕","Domino's Pizza","25–35 mins","4.4"],["🍗","KFC","20–30 mins","4.2"],["🍛","Biryani House","30–45 mins","4.6"]];

export default function Restaurants() {
  return <section className="homeSection"><div className="sectionHeader"><h2>Popular Restaurants</h2><button>View All</button></div><div className="restaurantRow">{restaurants.map(([icon,name,time,rating]) => <div className="restaurant" key={name}><div className="restaurantImg">{icon}</div><strong>{name}</strong><small>{time}</small><em>★ {rating}</em></div>)}</div></section>;
}
