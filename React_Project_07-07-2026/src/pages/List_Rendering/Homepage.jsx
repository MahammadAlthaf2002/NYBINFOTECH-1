import React, { lazy, Suspense, useState } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function HomePage() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>Lazy Loading Demo</h1>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>

      <hr />

      <Suspense fallback={<h2>Loading Component...</h2>}>
        {page === "home" ? <Home /> : <About />}
      </Suspense>
    </div>
  );
}

export default HomePage;