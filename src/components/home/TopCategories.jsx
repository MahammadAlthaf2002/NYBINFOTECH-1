import { useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";

export default function TopCategories() {
  const navigate = useNavigate();
  return <section className="homeSection"><div className="sectionHeader"><h2>Top Categories</h2><button>View All</button></div><div className="categoryRow">
    {categories.map(([icon,name,sub,type]) => <button className="categoryCard" key={name} onClick={() => navigate(`/compare/${type}`)}><span>{icon}</span><strong>{name}</strong><small>{sub}</small></button>)}
  </div></section>;
}
