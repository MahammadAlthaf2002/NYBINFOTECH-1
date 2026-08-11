import React from "react";

function UserCard({ user, onUserSelect }) {
  function handleClick() {
    onUserSelect(user);
  }

  return (
    <div>
      <h3>{user.name}</h3>

      <p>Email: {user.email}</p>

      <button onClick={handleClick}>
        View Details
      </button>

      <hr />
    </div>
  );
}

export default UserCard;