import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import FoodCard from "../components/FoodCard";
import Loading from "../components/Loading";

function Restaurant() {

  const { id } = useParams();

  const {
    data: foods,
    loading
  } = useFetch(
    "https://dummyjson.com/recipes"
  );

  if (loading) {
    return <Loading />;
  }

  const food = foods.find(
    (item) => item.id === Number(id)
  );

  if (!food) {
    return <h2>Food not found</h2>;
  }

  return (
    <div>

      <h1>{food.name}</h1>

      <p>
        Cuisine: {food.cuisine}
      </p>

      <p>
        Rating: ⭐ {food.rating}
      </p>

      <h2>Ingredients</h2>

      {food.ingredients.map((ingredient, index) => (
        <p key={index}>
          {ingredient}
        </p>
      ))}

      <FoodCard food={food} />

    </div>
  );
}

export default Restaurant;