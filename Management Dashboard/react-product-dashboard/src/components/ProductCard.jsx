import { formatProductName } from "../utils/productUtils";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card">
      <span className="category">{product.category}</span>

      <h3>{formatProductName(product.name)}</h3>
      <p>₹{product.price.toLocaleString("en-IN")}</p>

      {/* CALLBACK FUNCTION:
          This function runs when the user clicks the button. */}
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </article>
  );
}
