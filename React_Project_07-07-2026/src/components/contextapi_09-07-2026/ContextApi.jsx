import { createContext, useContext } from "react";

const UserContext = createContext();

function ContextApi() {
  const name = useContext(UserContext);

  return <h2>Welcome {name}</h2>;
}

function GlobalPage() {
  return (
    <UserContext.Provider value="Althaf">
      <div style={{ textAlign: "center" }}>
        <h1>Context API Example</h1>
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default ContextApi;