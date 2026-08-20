import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./ProductDetails.css";

const products = {
  iphone: {
    name: "iPhone 16",
    category: "Smartphone",
    icon: "📱",
    rating: 4.8,
    reviews: 1248,
    description:
      "Apple iPhone 16 with advanced camera system, powerful performance and premium design.",
    prices: [
      {
        store: "Amazon",
        price: 62999,
        delivery: "Free Delivery",
      },
      {
        store: "Flipkart",
        price: 59999,
        delivery: "Free Delivery",
      },
      {
        store: "Croma",
        price: 64990,
        delivery: "Free Delivery",
      },
      {
        store: "Reliance Digital",
        price: 63999,
        delivery: "Free Delivery",
      },
    ],
  },

  samsung: {
    name: "Samsung Galaxy S24",
    category: "Smartphone",
    icon: "📱",
    rating: 4.7,
    reviews: 986,
    description:
      "Samsung Galaxy S24 with flagship performance, Dynamic AMOLED display and advanced camera technology.",
    prices: [
      {
        store: "Amazon",
        price: 57999,
        delivery: "Free Delivery",
      },
      {
        store: "Flipkart",
        price: 54999,
        delivery: "Free Delivery",
      },
      {
        store: "Samsung",
        price: 58999,
        delivery: "Free Delivery",
      },
      {
        store: "Croma",
        price: 56999,
        delivery: "Free Delivery",
      },
    ],
  },

  sony: {
    name: "Sony WH-1000XM5",
    category: "Headphones",
    icon: "🎧",
    rating: 4.6,
    reviews: 742,
    description:
      "Premium wireless headphones featuring industry-leading noise cancellation and immersive sound.",
    prices: [
      {
        store: "Amazon",
        price: 24990,
        delivery: "Free Delivery",
      },
      {
        store: "Flipkart",
        price: 25999,
        delivery: "Free Delivery",
      },
      {
        store: "Croma",
        price: 27990,
        delivery: "Free Delivery",
      },
      {
        store: "Reliance Digital",
        price: 26999,
        delivery: "Free Delivery",
      },
    ],
  },
};

const reviews = [
  {
    name: "Rahul K.",
    rating: 5,
    text: "Excellent product. The price comparison helped me save money.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Very good experience. Product arrived quickly and was genuine.",
  },
  {
    name: "Arjun M.",
    rating: 4,
    text: "Good product and the comparison feature is very useful.",
  },
];

function ProductDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("name") || "iphone";

  let product = products.iphone;

  if (search.toLowerCase().includes("samsung")) {
    product = products.samsung;
  }

  if (
    search.toLowerCase().includes("sony") ||
    search.toLowerCase().includes("headphone")
  ) {
    product = products.sony;
  }

  const [activeTab, setActiveTab] = useState("overview");

  const lowestPrice = Math.min(
    ...product.prices.map((item) => item.price)
  );

  const highestPrice = Math.max(
    ...product.prices.map((item) => item.price)
  );

  const savings = highestPrice - lowestPrice;

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);

    navigate("/cart");
  };

  return (
    <div className="productDetailsPage">

      {/* HEADER */}

      <header className="productHeader">

        <div
          className="productLogo"
          onClick={() => navigate("/")}
        >
          <div className="productLogoMark">
            N
          </div>

          <div>
            <strong>NYB</strong>
            <span>INFOTECH</span>
          </div>
        </div>

        <div className="productHeaderTitle">
          SMART PRODUCT ANALYSIS
        </div>

        <div className="productHeaderActions">

          <button
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <button
            onClick={() => navigate("/cart")}
          >
            🛒 Cart
          </button>

        </div>

      </header>

      {/* BREADCRUMB */}

      <div className="breadcrumb">
        Home → {product.category} → {product.name}
      </div>

      {/* PRODUCT MAIN */}

      <main className="productDetailsContainer">

        <section className="productHero">

          {/* PRODUCT IMAGE */}

          <div className="largeProductImage">

            <span>
              {product.icon}
            </span>

            <div className="imageGlow"></div>

          </div>

          {/* PRODUCT INFORMATION */}

          <div className="productMainInfo">

            <span className="productDetailCategory">
              {product.category}
            </span>

            <h1>
              {product.name}
            </h1>

            <div className="productRating">

              <span>
                ⭐ {product.rating}
              </span>

              <span>
                {product.reviews.toLocaleString()} Reviews
              </span>

              <span className="verified">
                ✓ Verified Product
              </span>

            </div>

            <p className="productDescription">
              {product.description}
            </p>

            {/* PRICE */}

            <div className="bestPriceBox">

              <span>
                LOWEST AVAILABLE PRICE
              </span>

              <strong>
                ₹{lowestPrice.toLocaleString("en-IN")}
              </strong>

              <small>
                Save ₹{savings.toLocaleString("en-IN")} compared
                with the highest price
              </small>

            </div>

            {/* BUTTONS */}

            <div className="productActions">

              <button
                className="addCartButton"
                onClick={handleAddToCart}
              >
                🛒 Add to Cart
              </button>

              <button
                className="buyButton"
                onClick={() =>
                  navigate("/cart")
                }
              >
                Buy Now →
              </button>

            </div>

          </div>

        </section>

        {/* TABS */}

        <div className="productTabs">

          <button
            className={
              activeTab === "overview"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("overview")
            }
          >
            Overview
          </button>

          <button
            className={
              activeTab === "prices"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("prices")
            }
          >
            Price Comparison
          </button>

          <button
            className={
              activeTab === "history"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("history")
            }
          >
            Price History
          </button>

          <button
            className={
              activeTab === "reviews"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("reviews")
            }
          >
            Reviews
          </button>

        </div>

        {/* OVERVIEW */}

        {activeTab === "overview" && (

          <section className="detailSection">

            <span className="sectionMiniLabel">
              PRODUCT ANALYSIS
            </span>

            <h2>
              Smart buying information
            </h2>

            <div className="analysisGrid">

              <div className="analysisCard">
                <span>Lowest Price</span>
                <strong>
                  ₹{lowestPrice.toLocaleString("en-IN")}
                </strong>
                <small>
                  Best available deal
                </small>
              </div>

              <div className="analysisCard">
                <span>Highest Price</span>
                <strong>
                  ₹{highestPrice.toLocaleString("en-IN")}
                </strong>
                <small>
                  Across compared stores
                </small>
              </div>

              <div className="analysisCard">
                <span>Potential Saving</span>
                <strong>
                  ₹{savings.toLocaleString("en-IN")}
                </strong>
                <small>
                  If you choose the lowest price
                </small>
              </div>

              <div className="analysisCard">
                <span>Smart Score</span>
                <strong>
                  94/100
                </strong>
                <small>
                  Excellent deal
                </small>
              </div>

            </div>

          </section>

        )}

        {/* PRICE COMPARISON */}

        {activeTab === "prices" && (

          <section className="detailSection">

            <span className="sectionMiniLabel">
              LIVE COMPARISON
            </span>

            <h2>
              Compare prices across platforms
            </h2>

            <div className="priceComparisonTable">

              {product.prices
                .sort((a, b) => a.price - b.price)
                .map((item, index) => (

                  <div
                    className={
                      index === 0
                        ? "priceRow best"
                        : "priceRow"
                    }
                    key={item.store}
                  >

                    <div className="storeInfo">

                      <div className="storeIcon">
                        {item.store.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {item.store}
                        </strong>

                        <small>
                          {item.delivery}
                        </small>
                      </div>

                    </div>

                    <div className="storePrice">

                      <strong>
                        ₹{item.price.toLocaleString("en-IN")}
                      </strong>

                      {index === 0 && (
                        <span>
                          LOWEST PRICE
                        </span>
                      )}

                    </div>

                    <button
                      onClick={() =>
                        alert(
                          `Redirecting to ${item.store}`
                        )
                      }
                    >
                      Visit Store →
                    </button>

                  </div>

                ))}

            </div>

          </section>

        )}

        {/* PRICE HISTORY */}

        {activeTab === "history" && (

          <section className="detailSection">

            <span className="sectionMiniLabel">
              PRICE HISTORY
            </span>

            <h2>
              Understand the price trend
            </h2>

            <div className="historyCard">

              <div className="historyStats">

                <div>
                  <span>
                    Lowest Ever
                  </span>

                  <strong>
                    ₹52,999
                  </strong>
                </div>

                <div>
                  <span>
                    Current
                  </span>

                  <strong>
                    ₹{lowestPrice.toLocaleString("en-IN")}
                  </strong>
                </div>

                <div>
                  <span>
                    Highest
                  </span>

                  <strong>
                    ₹74,999
                  </strong>
                </div>

              </div>

              <div className="fakeChart">

                <div className="chartLine">
                  ╱╲__╱╲___╱╲__
                </div>

                <div className="chartLabels">
                  <span>Jan</span>
                  <span>Apr</span>
                  <span>Jul</span>
                  <span>Today</span>
                </div>

              </div>

              <p className="demoNotice">
                Price history shown here is demo data.
                We will connect this section to real
                historical price data when the backend/API
                integration is implemented.
              </p>

            </div>

          </section>

        )}

        {/* REVIEWS */}

        {activeTab === "reviews" && (

          <section className="detailSection">

            <span className="sectionMiniLabel">
              CUSTOMER REVIEWS
            </span>

            <h2>
              What customers say
            </h2>

            <div className="reviewsSummary">

              <div className="bigRating">

                <strong>
                  {product.rating}
                </strong>

                <div>
                  ⭐⭐⭐⭐⭐
                </div>

                <span>
                  {product.reviews.toLocaleString()} reviews
                </span>

              </div>

              <div className="ratingBars">

                <div>
                  5 ⭐
                  <span>
                    <i style={{ width: "88%" }}></i>
                  </span>
                  88%
                </div>

                <div>
                  4 ⭐
                  <span>
                    <i style={{ width: "72%" }}></i>
                  </span>
                  72%
                </div>

                <div>
                  3 ⭐
                  <span>
                    <i style={{ width: "30%" }}></i>
                  </span>
                  30%
                </div>

              </div>

            </div>

            <div className="reviewList">

              {reviews.map((review, index) => (

                <div
                  className="reviewCard"
                  key={index}
                >

                  <div className="reviewAvatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>

                    <strong>
                      {review.name}
                    </strong>

                    <div>
                      {"⭐".repeat(review.rating)}
                    </div>

                    <p>
                      {review.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            <p className="demoNotice">
              Reviews displayed above are sample UI data
              for the project. Real marketplace reviews
              require permitted APIs or data sources.
            </p>

          </section>

        )}

      </main>

      {/* FOOTER */}

      <footer className="productFooter">

        <strong>
          NYB INFOTECH
        </strong>

        <span>
          One platform. Every need.
        </span>

      </footer>

    </div>
  );
}

export default ProductDetails;