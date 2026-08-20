import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import products from "../data/products";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const product = products.find(
    product => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="container">

      <img
        src={product.image}
        alt={product.title}
        width="300"
      />

      <h1>{product.title}</h1>

      <h2>₹{product.price}</h2>

      <p>Category: {product.category}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductDetails;