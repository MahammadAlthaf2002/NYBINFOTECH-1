import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="productCard">
      <Link className="productImage" to={`/redux-cart/products/${product.id}`}><img src={product.image} alt={product.title} /><span>{product.badge}</span></Link>
      <div className="productInfo"><p className="category">{product.category}</p><h3>{product.title}</h3><p className="rating">★ {product.rating} <span>Customer rating</span></p><div className="cardFooter"><strong>Rs. {product.price.toLocaleString("en-IN")}</strong><button onClick={handleAddToCart}>Add to cart</button></div></div>
    </article>
  );
};

export default ProductCard;
