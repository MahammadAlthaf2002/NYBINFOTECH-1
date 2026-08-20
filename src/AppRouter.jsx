import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function NotFound() {
  return (
    <main className="centerPage">
      <div>
        <span className="eyebrow">NYB INFOTECH</span>
        <h1>404</h1>
        <p>The page you requested was not found.</p>
        <a className="primaryButton" href="/">Back to Home</a>
      </div>
    </main>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/compare/:category" element={<Compare />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/compare/search" element={<Compare />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}