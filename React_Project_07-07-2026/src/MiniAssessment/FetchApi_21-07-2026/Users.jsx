import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading Users...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email : {user.email}</p>
          <p>Phone : {user.phone}</p>
          <p>Company : {user.company.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;