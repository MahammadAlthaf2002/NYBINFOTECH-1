import { useState, useMemo } from "react";

function ShoppingCart() {
  const [laptopQty, setLaptopQty] = useState(1);
  const [mouseQty, setMouseQty] = useState(2);
  const [keyboardQty, setKeyboardQty] = useState(1);
  const [counter, setCounter] = useState(0);

  const laptopPrice = 50000;
  const mousePrice = 1000;
  const keyboardPrice = 2000;

  console.log("Shopping Cart Rendered");

  const totalAmount = useMemo(() => {
    console.log("Calculating Total Amount...");

    return (
      laptopQty * laptopPrice +
      mouseQty * mousePrice +
      keyboardQty * keyboardPrice
    );
  }, [laptopQty, mouseQty, keyboardQty]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <hr />

      <h2>Laptop Price : ₹{laptopPrice}</h2>
      <h3>Quantity : {laptopQty}</h3>

      <button onClick={() => setLaptopQty(laptopQty + 1)}>
        Add Laptop
      </button>

      <hr />

      <h2>Mouse Price : ₹{mousePrice}</h2>
      <h3>Quantity : {mouseQty}</h3>

      <button onClick={() => setMouseQty(mouseQty + 1)}>
        Add Mouse
      </button>

      <hr />

      <h2>Keyboard Price : ₹{keyboardPrice}</h2>
      <h3>Quantity : {keyboardQty}</h3>

      <button onClick={() => setKeyboardQty(keyboardQty + 1)}>
        Add Keyboard
      </button>

      <hr />

      <h2>Total Amount : ₹{totalAmount}</h2>

      <hr />

      <h2>Counter : {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default ShoppingCart;