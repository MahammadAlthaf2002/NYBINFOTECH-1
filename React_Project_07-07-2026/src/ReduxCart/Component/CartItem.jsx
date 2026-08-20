import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  return (
    <div className="cartItem">

      <img
        src={item.image}
        alt={item.title}
      />

      <div>
        <h3>{item.title}</h3>

        <p>₹{item.price}</p>

        <div>
          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>
        </div>

        <button
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
        >
          Remove
        </button>
      </div>

    </div>
  );
};

export default CartItem;