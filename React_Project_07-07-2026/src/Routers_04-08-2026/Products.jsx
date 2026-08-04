import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h2>Products Page</h2>

      <ul>
        <li>
          <Link to="/product/101">Laptop</Link>
        </li>

        <li>
          <Link to="/product/102">Mobile</Link>
        </li>

        <li>
          <Link to="/product/103">Headphones</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;