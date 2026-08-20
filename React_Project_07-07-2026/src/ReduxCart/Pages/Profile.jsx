import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/userSlice";

const Profile = () => {

  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        name: "Althaf",
        email: "althaf@example.com"
      })
    );
  };

  if (!user) {
    return (
      <div className="container">

        <h1>User Profile</h1>

        <button onClick={handleLogin}>
          Login
        </button>

      </div>
    );
  }

  return (
    <div className="container">

      <h1>Welcome, {user.name}</h1>

      <p>{user.email}</p>

      <button onClick={() => dispatch(logout())}>
        Logout
      </button>

    </div>
  );
};

export default Profile;