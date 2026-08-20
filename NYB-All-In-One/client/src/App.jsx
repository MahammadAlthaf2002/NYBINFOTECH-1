import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const categories = [
  {
    icon: "🛒",
    name: "Shopping",
    text: "Compare products & prices",
  },
  {
    icon: "🍔",
    name: "Food",
    text: "Compare food & delivery",
  },
  {
    icon: "✈️",
    name: "Flights",
    text: "Find the best airfare",
  },
  {
    icon: "🏨",
    name: "Hotels",
    text: "Compare hotel prices",
  },
  {
    icon: "🎬",
    name: "Movies",
    text: "Find tickets & shows",
  },
  {
    icon: "💊",
    name: "Pharmacy",
    text: "Compare medicine prices",
  },
  {
    icon: "🏏",
    name: "Sports",
    text: "Live scores & updates",
  },
  {
    icon: "🔌",
    name: "Recharge",
    text: "Find better recharge offers",
  },
];

const deals = [
  {
    name: "iPhone 16",
    category: "Smartphone",
    price: "₹59,999",
    oldPrice: "₹69,999",
    save: "₹10,000",
    rating: "4.8",
    icon: "📱",
  },
  {
    name: "Samsung Galaxy S24",
    category: "Smartphone",
    price: "₹54,999",
    oldPrice: "₹74,999",
    save: "₹20,000",
    rating: "4.7",
    icon: "📱",
  },
  {
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: "₹24,990",
    oldPrice: "₹34,990",
    save: "₹10,000",
    rating: "4.6",
    icon: "🎧",
  },
];

function App() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDeals = deals.filter((item) => {
    const searchText = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText)
    );
  });

  // Search / Compare button
  const handleCompare = () => {
    if (!search.trim()) {
      navigate("/compare/shopping");
      return;
    }

    navigate(`/compare/search?q=${encodeURIComponent(search)}`);
  };

  // Category click
  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);

    navigate(`/compare/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="logo">

          <div className="logoMark">
            N
          </div>

          <div>
            <h2>NYB</h2>
            <span>INFOTECH</span>
          </div>

        </div>


        <div className="navLinks">

          <button
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <button
            onClick={() => navigate("/compare/shopping")}
          >
            Compare
          </button>

          <button>
            Deals
          </button>

          <button>
            Price History
          </button>

        </div>


        <div className="navActions">

          <button className="iconButton">
            🔔
          </button>

          <button
            className="iconButton"
            onClick={() => alert("Cart will be available soon")}
          >
            🛒
          </button>

          <button
            className="loginButton"
            onClick={() => alert("Login page will be added next")}
          >
            Login
          </button>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="heroContent">

          <div className="badge">
            ✨ SMART COMPARISON PLATFORM
          </div>


          <h1>
            Find the
            <span> Best Price.</span>
            <br />
            Every Time.
          </h1>


          <p>
            One intelligent platform to compare shopping, food,
            flights, hotels, movies, pharmacy and more.
          </p>


          {/* SEARCH */}

          <div className="searchBox">

            <span className="searchIcon">
              ⌕
            </span>


            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCompare();
                }
              }}
              placeholder="Search anything... product, food, flight, hotel..."
            />


            <button
              className="searchButton"
              onClick={handleCompare}
            >
              Compare
            </button>

          </div>


          {/* SEARCH HINTS */}

          <div className="searchHints">

            <span>
              Try:
            </span>


            <button
              onClick={() => setSearch("iPhone")}
            >
              iPhone
            </button>


            <button
              onClick={() => setSearch("Samsung")}
            >
              Samsung
            </button>


            <button
              onClick={() => setSearch("Headphones")}
            >
              Headphones
            </button>

          </div>

        </div>


        {/* ================= HERO GRAPHIC ================= */}

        <div className="heroGraphic">

          <div className="orb">

            <div className="orbCore">

              <span>
                NYB
              </span>

              <small>
                AI
              </small>

            </div>


            <div className="orbit orbit1">
              <div>
                🛒
              </div>
            </div>


            <div className="orbit orbit2">
              <div>
                ✈️
              </div>
            </div>


            <div className="orbit orbit3">
              <div>
                🍔
              </div>
            </div>


            <div className="orbit orbit4">
              <div>
                🎬
              </div>
            </div>

          </div>


          {/* LOWEST PRICE CARD */}

          <div className="floatingCard card1">

            <span>
              LOWEST PRICE
            </span>

            <strong>
              ₹49,999
            </strong>

            <small>
              ↓ 18% today
            </small>

          </div>


          {/* SMART SCORE CARD */}

          <div className="floatingCard card2">

            <span>
              SMART SCORE
            </span>

            <strong>
              94/100
            </strong>

            <small>
              Excellent deal
            </small>

          </div>

        </div>

      </section>


      {/* ================= AI SECTION ================= */}

      <section className="aiSection">

        <div className="aiIcon">
          🤖
        </div>


        <div className="aiText">

          <span>
            MEET NYB AI
          </span>


          <h2>
            Your personal shopping & comparison assistant.
          </h2>


          <p>
            Tell NYB what you need. AI understands your request,
            searches the right category and helps you find the
            best available option.
          </p>

        </div>


        <button
          className="aiButton"
          onClick={() => alert("NYB AI will be added next")}
        >
          Ask NYB AI →
        </button>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="section">

        <div className="sectionHeader">

          <div>

            <span className="sectionLabel">
              EXPLORE
            </span>


            <h2>
              Everything you need.
              <span>
                {" "}One platform.
              </span>
            </h2>

          </div>


          <button
            className="viewAll"
            onClick={() => navigate("/compare/shopping")}
          >
            View all →
          </button>

        </div>


        <div className="categoryGrid">

          {categories.map((category) => (

            <button
              className={`categoryCard ${
                activeCategory === category.name
                  ? "selectedCategory"
                  : ""
              }`}
              key={category.name}
              onClick={() =>
                handleCategoryClick(category.name)
              }
            >

              <div className="categoryIcon">
                {category.icon}
              </div>


              <div>

                <h3>
                  {category.name}
                </h3>

                <p>
                  {category.text}
                </p>

              </div>


              <span className="arrow">
                →
              </span>

            </button>

          ))}

        </div>

      </section>


      {/* ================= DEALS ================= */}

      <section className="section dealsSection">

        <div className="sectionHeader">

          <div>

            <span className="sectionLabel">
              TRENDING DEALS
            </span>


            <h2>
              Deals worth
              <span>
                {" "}checking.
              </span>
            </h2>

          </div>


          <div className="dealTabs">

            <button
              className="active"
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>

            <button>
              Electronics
            </button>

            <button>
              Fashion
            </button>

            <button>
              Home
            </button>

          </div>

        </div>


        <div className="productGrid">

          {filteredDeals.length > 0 ? (

            filteredDeals.map((deal) => (

              <div
                className="productCard"
                key={deal.name}
              >

                <div className="productImage">

                  <div className="productEmoji">
                    {deal.icon}
                  </div>


                  <span className="dealBadge">
                    SAVE {deal.save}
                  </span>

                </div>


                <div className="productInfo">

                  <span className="productCategory">
                    {deal.category}
                  </span>


                  <h3>
                    {deal.name}
                  </h3>


                  <div className="rating">
                    ⭐ {deal.rating}
                  </div>


                  <div className="priceRow">

                    <strong>
                      {deal.price}
                    </strong>

                    <del>
                      {deal.oldPrice}
                    </del>

                  </div>


                  <button
                    className="compareProduct"
                    onClick={() =>
                      navigate(
                        `/compare/search?q=${encodeURIComponent(
                          deal.name
                        )}`
                      )
                    }
                  >
                    Compare Prices →
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="noResults">

              <h3>
                No products found
              </h3>

              <p>
                Try searching for another product.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footerLogo">

          <div className="logoMark">
            N
          </div>


          <div>

            <strong>
              NYB INFOTECH
            </strong>

            <p>
              One platform. Every need.
            </p>

          </div>

        </div>


        <p>
          © 2026 NYB Infotech.
          Smart comparison for everyone.
        </p>

      </footer>

    </div>
  );
}

export default App;