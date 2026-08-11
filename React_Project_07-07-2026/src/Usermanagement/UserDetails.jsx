import React from "react";

function UserDetails({ user }) {
  if (!user) {
    return (
      <div>
        <h2>User Details</h2>
        <p>Select a user to see details.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>User Details</h2>

      <h3>{user.name}</h3>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <p>
        <strong>City:</strong> {user.address.city}
      </p>

      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
}

export default UserDetails;