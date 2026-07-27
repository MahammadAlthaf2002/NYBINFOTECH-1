import React, { memo } from "react";

function UserCard({ user }) {
  console.log("User Card Rendered");

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h2>{user.name}</h2>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
}

export default memo(UserCard);