import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Profile() {
  const { user, login, logout } = useContext(AppContext);

  return (
    <div>
      <h2>Profile Component</h2>

      <p>User : {user}</p>

      <button onClick={login}>Login</button>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;