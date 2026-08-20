import { useNavigate } from "react-router-dom";

const categories = [
  { icon: "🛒", name: "Shopping", type: "shopping" },
  { icon: "🍔", name: "Food", type: "food" },
  { icon: "✈️", name: "Flights", type: "flights" },
  { icon: "🏨", name: "Hotels", type: "hotels" },
  { icon: "🎬", name: "Movies", type: "movies" },
  { icon: "💊", name: "Pharmacy", type: "pharmacy" },
  { icon: "🏏", name: "Sports", type: "sports" },
  { icon: "🔌", name: "Recharge", type: "recharge" },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>NYB INFOTECH</h1>

      <p>
        Find the best price across multiple platforms.
      </p>

      <div className="categoryGrid">
        {categories.map((category) => (
          <button
            key={category.type}
            onClick={() => navigate(`/compare/${category.type}`)}
          >
            <span>{category.icon}</span>

            <strong>{category.name}</strong>

            <small>
              Compare prices →
            </small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;