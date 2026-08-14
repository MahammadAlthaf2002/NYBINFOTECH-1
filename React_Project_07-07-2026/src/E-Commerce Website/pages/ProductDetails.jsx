import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  var { id } = useParams();

  var product = products.find(function(item) {
    return item.id === Number(id);
  });

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div>

      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
      />

      <h2>₹{product.price}</h2>

      <p>Category: {product.category}</p>

      <p>{product.description}</p>

      <Link to="/products">
        ← Back to Products
      </Link>

    </div>
  );
}

export default ProductDetails;