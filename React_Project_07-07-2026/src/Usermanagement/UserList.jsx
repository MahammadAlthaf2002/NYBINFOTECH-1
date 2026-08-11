import React from "react";
import UserCard from "./UserCard";

function UserList({ users, onUserSelect }) {
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUserSelect={onUserSelect}
          />
        ))
      )}
    </div>
  );
}

export default UserList;