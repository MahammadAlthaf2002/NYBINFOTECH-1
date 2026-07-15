import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Theme() {
  const { theme, changeTheme } = useContext(AppContext);

  return (
    <div>
      <h2>Theme Component</h2>

      <p>Current Theme : {theme}</p>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Theme;