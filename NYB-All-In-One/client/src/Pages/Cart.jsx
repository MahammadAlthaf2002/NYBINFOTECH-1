import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 16",
      category: "Smartphone",
      price: 59999,
      quantity: 1,
      icon: "📱",
      seller: "Flipkart",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 24990,
      quantity: 1,
      icon: "🎧",
      seller: "Amazon",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(0, item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + delivery;

  return (
    <div className="cartPage">

      {/* HEADER */}

      <header className="cartHeader">

        <div
          className="cartLogo"
          onClick={() => navigate("/")}
        >
          <div className="cartLogoMark">
            N
          </div>

          <div>
            <strong>NYB</strong>
            <span>INFOTECH</span>
          </div>
        </div>

        <div className="cartTitle">
          <span>NYB SMART CART</span>
          <h1>Your Cart</h1>
        </div>

        <button
          className="backButton"
          onClick={() => navigate("/")}
        >
          ← Continue Shopping
        </button>

      </header>


      {/* CART CONTENT */}

      <main className="cartContainer">

        <div className="cartTop">

          <div>
            <span className="cartLabel">
              YOUR SELECTION
            </span>

            <h2>
              Shopping Cart
            </h2>

            <p>
              {cartItems.length} item
              {cartItems.length !== 1 ? "s" : ""} in your cart
            </p>
          </div>

        </div>


        {cartItems.length === 0 ? (

          <div className="emptyCart">

            <div>
              🛒
            </div>

            <h2>
              Your cart is empty
            </h2>

            <p>
              Find products and compare prices before
              adding them to your cart.
            </p>

            <button
              onClick={() => navigate("/")}
            >
              Explore Products →
            </button>

          </div>

        ) : (

          <div className="cartLayout">

            {/* ITEMS */}

            <section className="cartItems">

              {cartItems.map((item) => (

                <div
                  className="cartItem"
                  key={item.id}
                >

                  <div className="cartProductImage">
                    {item.icon}
                  </div>


                  <div className="cartProductInfo">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      Best available price from{" "}
                      <strong>
                        {item.seller}
                      </strong>
                    </p>

                    <button
                      className="removeButton"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>


                  <div className="cartQuantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <strong>
                      {item.quantity}
                    </strong>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>


                  <div className="cartPrice">

                    <strong>
                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString("en-IN")}
                    </strong>

                    <span>
                      ₹
                      {item.price.toLocaleString(
                        "en-IN"
                      )} each
                    </span>

                  </div>

                </div>

              ))}

            </section>


            {/* SUMMARY */}

            <aside className="cartSummary">

              <span>
                ORDER SUMMARY
              </span>

              <h2>
                Price Details
              </h2>


              <div className="summaryRow">
                <span>
                  Items
                </span>

                <strong>
                  {cartItems.length}
                </strong>
              </div>


              <div className="summaryRow">
                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{subtotal.toLocaleString("en-IN")}
                </strong>
              </div>


              <div className="summaryRow">
                <span>
                  Delivery
                </span>

                <strong className="free">
                  FREE
                </strong>
              </div>


              <div className="summaryDivider"></div>


              <div className="totalRow">
                <span>
                  Total
                </span>

                <strong>
                  ₹{total.toLocaleString("en-IN")}
                </strong>
              </div>


              <button
                className="checkoutButton"
                onClick={() =>
                  navigate("/checkout")
                }
              >
                Proceed to Checkout →
              </button>


              <div className="secureCheckout">
                🔒 Secure checkout
              </div>

            </aside>

          </div>

        )}

      </main>

    </div>
  );
}

export default Cart;