import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <h2>User: {name}</h2>

      <button onClick={() => setName("React Developer")}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;
