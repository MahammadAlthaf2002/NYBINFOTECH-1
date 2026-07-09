import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  const { name } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {name}</h2>
    </div>
  );
}

export default Header;