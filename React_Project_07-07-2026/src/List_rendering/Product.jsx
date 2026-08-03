import React, { useState } from "react";

function product() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 65000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Keyboard", price: 1200 },
    { id: 4, name: "Mouse", price: 800 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map(({ id, name, price }) => (
        <div
          key={id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h2>{name}</h2>
          <p>Price : ₹{price}</p>
        </div>
      ))}
    </div>
  );
}

export default product;