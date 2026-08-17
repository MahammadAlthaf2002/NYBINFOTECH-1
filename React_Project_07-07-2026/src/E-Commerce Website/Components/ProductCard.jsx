import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <h3>₹{product.price}</h3>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <br />

      <Link to={`/products/${product.id}`}>
        View Details
      </Link>

    </div>
  );
}

export default ProductCard;

