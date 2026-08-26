import { useState } from "react";
import { products } from "./data/products";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import {
  addProductToCart,
  filterProducts,
  removeFromCart,
  updateQuantity
} from "./utils/productUtils";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // IIFE: Immediately Invoked Function Expression.
  // It executes immediately and returns a value.
  const welcomeMessage = (() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  })();

  // FIRST-CLASS FUNCTIONS:
  // These handlers are stored in variables and passed to child components.

  // CALLBACK USAGE:
  // Child components receive these functions as props and call them later.

  // CLOSURE:
  // These functions are created inside App and can access setCart and other
  // values from App's scope.

  const handleAddToCart = (product) => {
    setCart((previousCart) =>
      addProductToCart(previousCart, product)
    );
  };

  const handleIncrease = (productId) => {
    setCart((previousCart) =>
      updateQuantity(previousCart, productId, 1)
    );
  };

  const handleDecrease = (productId) => {
    setCart((previousCart) =>
      updateQuantity(previousCart, productId, -1)
    );
  };

  const handleRemove = (productId) => {
    setCart((previousCart) =>
      removeFromCart(previousCart, productId)
    );
  };

  // HIGHER-ORDER FUNCTIONS are used inside filterProducts:
  // filter, map and reduce.
  const visibleProducts = filterProducts(
    products,
    search,
    category
  );

  return (
    <main className="app">
      <header>
        <h1>Product Management Dashboard</h1>
        <p>{welcomeMessage}</p>
        <p className="subtitle">
          Practice project for important JavaScript concepts in React.
        </p>
      </header>

      <SearchBar
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      <div className="dashboard">
        <section>
          <h2>Products</h2>
          <ProductList
            products={visibleProducts}
            onAddToCart={handleAddToCart}
          />
        </section>

        <Cart
          cart={cart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      </div>
    </main>
  );
}
