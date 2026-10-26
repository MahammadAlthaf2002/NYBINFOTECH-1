
import {
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
} from "react";

// Load Reports only when the Reports page is opened
const Reports = lazy(() => import("./components/Reports"));

const initialProducts = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: ((index + 1) * 17) % 1000 + 100,
  category: ["Electronics", "Clothing", "Books"][
    index % 3
  ],
}));

// React.memo avoids re-rendering when props remain unchanged
const ProductCard = memo(function ProductCard({
  product,
  isFavourite,
  onToggleFavourite,
}) {
  console.log("Rendering:", product.name);

  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => onToggleFavourite(product.id)}>
        {isFavourite ? "❤️ Remove Favourite" : "🤍 Add Favourite"}
      </button>
    </article>
  );
});

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("2000");
  const [favourites, setFavourites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("products");

  // useMemo caches the filtered list until dependencies change
  const filteredProducts = useMemo(() => {
    console.log("Filtering products");

    return initialProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesPrice = product.price <= Number(maxPrice);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, maxPrice]);

  // useCallback preserves the function reference between renders
  const toggleFavourite = useCallback((productId) => {
    setFavourites((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  }, []);

  const changeTheme = useCallback(() => {
    setDarkMode((previous) => !previous);
  }, []);

  return (
    <main className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <div>
          <h1>React Performance Dashboard</h1>
          <p>Learn React optimization with a working example.</p>
        </div>

        <button onClick={changeTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <nav className="navigation">
        <button
          className={page === "products" ? "active" : ""}
          onClick={() => setPage("products")}
        >
          Products
        </button>

        <button
          className={page === "reports" ? "active" : ""}
          onClick={() => setPage("reports")}
        >
          Reports
        </button>
      </nav>

      {page === "products" ? (
        <>
          <section className="summary">
            <div>
              <h2>{initialProducts.length}</h2>
              <p>Total Products</p>
            </div>

            <div>
              <h2>{filteredProducts.length}</h2>
              <p>Filtered Products</p>
            </div>

            <div>
              <h2>{favourites.length}</h2>
              <p>Favourites</p>
            </div>
          </section>

          <section className="filters">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>

            <label>
              Maximum price: ₹{maxPrice}
              <input
                type="range"
                min="100"
                max="2000"
                step="100"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
              />
            </label>
          </section>

          <section className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavourite={favourites.includes(product.id)}
                  onToggleFavourite={toggleFavourite}
                />
              ))
            ) : (
              <p>No products match your filters.</p>
            )}
          </section>
        </>
      ) : (
        <Suspense fallback={<p className="loading">Loading reports...</p>}>
          <Reports
            totalProducts={initialProducts.length}
            favouriteCount={favourites.length}
          />
        </Suspense>
      )}
    </main>
  );
}

export default App;
