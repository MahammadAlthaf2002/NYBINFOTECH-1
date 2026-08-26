import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p className="empty">No products found.</p>;
  }

  return (
    <section className="product-grid">
      {/* HIGHER-ORDER FUNCTION: map receives a callback */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}
