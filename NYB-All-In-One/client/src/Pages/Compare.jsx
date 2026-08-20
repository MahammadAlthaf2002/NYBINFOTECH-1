import { useParams, useSearchParams } from "react-router-dom";
import "./Compare.css";

const providers = [
  {
    name: "Amazon",
    price: 62999,
    rating: 4.6,
  },
  {
    name: "Flipkart",
    price: 59999,
    rating: 4.5,
  },
  {
    name: "Croma",
    price: 64999,
    rating: 4.3,
  },
  {
    name: "Reliance Digital",
    price: 63499,
    rating: 4.2,
  },
];

function Compare() {
  const { type } = useParams();
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");

  const title = searchQuery || type || "Shopping";

  const lowest = Math.min(
    ...providers.map((item) => item.price)
  );

  const highest = Math.max(
    ...providers.map((item) => item.price)
  );

  const saving = highest - lowest;

  return (
    <div className="comparePage">

      {/* TOP BAR */}

      <header className="compareTopBar">

        <div className="compareLogo">
          <div className="compareLogoMark">N</div>

          <div>
            <strong>NYB</strong>
            <span>INFOTECH</span>
          </div>
        </div>

        <div className="compareTitle">
          <span>SMART COMPARISON</span>
          <h1>Find the Best Price</h1>
        </div>

        <button className="backButton">
          ← Back
        </button>

      </header>


      {/* SEARCH */}

      <section className="compareSearch">

        <div className="compareSearchBox">

          <span>⌕</span>

          <input
            defaultValue={searchQuery || ""}
            placeholder="Search product, food, flight, hotel..."
          />

          <button>
            Compare
          </button>

        </div>

      </section>


      {/* RESULT HEADER */}

      <section className="resultHeader">

        <div>

          <span className="resultLabel">
            COMPARISON RESULT
          </span>

          <h2>
            {title}
          </h2>

          <p>
            Comparing available providers to find
            the best value for you.
          </p>

        </div>

        <div className="liveStatus">
          <span></span>
          Comparison Engine Ready
        </div>

      </section>


      {/* SUMMARY */}

      <section className="summaryGrid">

        <div className="summaryCard lowest">

          <span>🏆 LOWEST PRICE</span>

          <strong>
            ₹{lowest.toLocaleString("en-IN")}
          </strong>

          <small>
            Best available price
          </small>

        </div>


        <div className="summaryCard">

          <span>📈 HIGHEST PRICE</span>

          <strong>
            ₹{highest.toLocaleString("en-IN")}
          </strong>

          <small>
            Highest provider price
          </small>

        </div>


        <div className="summaryCard saving">

          <span>💰 POTENTIAL SAVING</span>

          <strong>
            ₹{saving.toLocaleString("en-IN")}
          </strong>

          <small>
            You could save this amount
          </small>

        </div>

      </section>


      {/* PROVIDERS */}

      <section className="providersSection">

        <div className="sectionHeading">

          <div>
            <span>PRICE COMPARISON</span>

            <h2>
              Available Providers
            </h2>
          </div>

          <small>
            Updated just now
          </small>

        </div>


        <div className="providerList">

          {[...providers]
            .sort((a, b) => a.price - b.price)
            .map((provider, index) => {

              const isLowest =
                provider.price === lowest;

              return (

                <div
                  className={`providerCard ${
                    isLowest ? "bestProvider" : ""
                  }`}
                  key={provider.name}
                >

                  <div className="rank">
                    #{index + 1}
                  </div>


                  <div className="providerLogo">
                    {provider.name.charAt(0)}
                  </div>


                  <div className="providerInfo">

                    <h3>
                      {provider.name}
                    </h3>

                    <p>
                      ⭐ {provider.rating}
                    </p>

                  </div>


                  <div className="providerPrice">

                    <small>PRICE</small>

                    <strong>
                      ₹{provider.price.toLocaleString("en-IN")}
                    </strong>

                  </div>


                  {isLowest && (

                    <div className="lowestBadge">
                      🏆 LOWEST
                    </div>

                  )}


                  <button className="viewDeal">
                    View Deal →
                  </button>

                </div>

              );
            })}

        </div>

      </section>


      {/* PRICE HISTORY */}

      <section className="priceHistory">

        <div className="historyText">

          <span>PRICE HISTORY</span>

          <h2>
            Is this a good time to buy?
          </h2>

          <p>
            NYB tracks historical pricing so users can
            understand whether today's price is actually
            a good deal.
          </p>

        </div>


        <div className="historyNumbers">

          <div>
            <small>LOWEST EVER</small>
            <strong>₹54,999</strong>
          </div>

          <div>
            <small>CURRENT LOWEST</small>
            <strong>₹59,999</strong>
          </div>

          <div>
            <small>CHANGE</small>
            <strong>+9.1%</strong>
          </div>

        </div>

      </section>


      {/* DISCLAIMER */}

      <div className="demoNotice">
        ⚠️ Development comparison data — provider integrations
        will be connected in the backend.
      </div>

    </div>
  );
}

export default Compare;