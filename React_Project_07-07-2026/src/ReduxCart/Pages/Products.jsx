import { useState } from "react";
import products from "../data/products";
import ProductCard from "../component/ProductCard";

const Products = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map(product => product.category))
  ];

  const filteredProducts = products.filter(product => {

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="shopPage container">
      <div className="pageIntro"><p className="eyebrow">Browse the collection</p><h1>Find your next favourite.</h1><p>{filteredProducts.length} products available</p></div>
      <div className="catalogControls">
        <label className="searchBox"><span>Search</span><input type="text" placeholder="Search products" value={search} onChange={e => setSearch(e.target.value)} /></label>
        <label className="selectBox"><span>Category</span><select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(category => (
          <option key={category}>
            {category}
          </option>
        ))}
        </select></label>
      </div>

      <div className="products">

        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </main>
  );
};

export default Products;
