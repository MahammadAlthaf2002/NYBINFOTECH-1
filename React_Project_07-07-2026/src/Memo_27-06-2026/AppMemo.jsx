import React, { useState } from "react";
import User from "./User";

function App() {

    const [count, setCount] = useState(0);

    console.log("App Component Rendered");

    return (
        <div>

            <h1>Counter : {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <User />

        </div>
    );
}

export default App;