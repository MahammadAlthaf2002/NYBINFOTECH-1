import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products({ addToCart }) {

  var [productList, setProductList] = useState([]);
  var [search, setSearch] = useState("");

  useEffect(() => {
    setProductList(products);
  }, []);

  var filteredProducts = productList.filter(function(product) {
    return product.name
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <div>

      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">

        {filteredProducts.length > 0 ? (

          filteredProducts.map(function(product) {
            return (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            );
          })

        ) : (

          <p>No products found.</p>

        )}

      </div>

    </div>
  );
}

export default Products;