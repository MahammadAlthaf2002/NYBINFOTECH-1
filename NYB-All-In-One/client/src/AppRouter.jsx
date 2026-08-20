import { Routes, Route } from "react-router-dom";

import App from "./App";
import ProductDetails from "./pages/ProductDetails";

function ComparePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070a12",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>NYB Comparison Platform</h1>

      <p>Compare prices across different platforms.</p>

      <p style={{ color: "#00e9bd" }}>
        Comparison page coming next...
      </p>
    </div>
  );
}

function CartPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070a12",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🛒 NYB Cart</h1>

      <p>Your selected products will appear here.</p>

      <p style={{ color: "#00e9bd" }}>
        Cart system coming next...
      </p>
    </div>
  );
}

function AppRouter() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<App />} />

      {/* PRODUCT DETAILS */}
      <Route path="/product" element={<ProductDetails />} />

      {/* COMPARISON */}
      <Route
        path="/compare/shopping"
        element={<ComparePage />}
      />

      <Route
        path="/compare/:category"
        element={<ComparePage />}
      />

      <Route
        path="/compare/search"
        element={<ComparePage />}
      />

      {/* CART */}
      <Route path="/cart" element={<CartPage />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div
            style={{
              minHeight: "100vh",
              background: "#070a12",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <h1>404</h1>
            <p>Page not found</p>

            <a
              href="/"
              style={{
                color: "#00e9bd",
                textDecoration: "none",
              }}
            >
              ← Back to NYB Home
            </a>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRouter;