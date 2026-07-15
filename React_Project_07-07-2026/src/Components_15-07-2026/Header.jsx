import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Header() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>Header Component</h2>
      <h3>Welcome : {user}</h3>
    </div>
  );
}

export default Header;