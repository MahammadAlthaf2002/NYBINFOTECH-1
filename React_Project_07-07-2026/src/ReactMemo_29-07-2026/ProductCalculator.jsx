import { useState, useMemo } from "react";

function ProductCalculator() {
  const [price, setPrice] = useState(5000);
  const [discount, setDiscount] = useState(10);
  const [counter, setCounter] = useState(0);

  console.log("Component Rendered");

  const discountAmount = useMemo(() => {
    console.log("Calculating Discount...");

    return (price * discount) / 100;
  }, [price, discount]);

  const finalPrice = useMemo(() => {
    console.log("Calculating Final Price...");

    return price - discountAmount;
  }, [price, discountAmount]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Discount Calculator</h1>

      <hr />

      <h2>Original Price : ₹{price}</h2>

      <button onClick={() => setPrice(price + 1000)}>
        Increase Price
      </button>

      <hr />

      <h2>Discount : {discount}%</h2>

      <button onClick={() => setDiscount(discount + 5)}>
        Increase Discount
      </button>

      <hr />

      <h2>Discount Amount : ₹{discountAmount}</h2>

      <h2>Final Price : ₹{finalPrice}</h2>

      <hr />

      <h2>Counter : {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default ProductCalculator;