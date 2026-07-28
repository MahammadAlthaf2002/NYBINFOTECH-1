import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <h2>React Mini Application</h2>

      <h3>Count : {count}</h3>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;