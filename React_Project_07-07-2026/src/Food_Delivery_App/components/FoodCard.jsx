import React from "react";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function FoodCard({ food }) {

  const { addToCart } = useContext(CartContext);

  console.log("FoodCard rendered:", food.id);

  return (
    <div>

      <h3>{food.name}</h3>

      <p>₹{food.price}</p>

      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>

    </div>
  );
}

export default React.memo(FoodCard);