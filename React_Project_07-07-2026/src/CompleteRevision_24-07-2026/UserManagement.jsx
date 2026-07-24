import React, { useEffect, useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

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

  // Fetch data on page load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Search Users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management Dashboard</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchUsers}>Refresh</button>

      <h3>Total Users : {filteredUsers.length}</h3>

      {/* Loading */}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : filteredUsers.length === 0 ? (
        <h2>No Users Found</h2>
      ) : (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <h3>{user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>City : {user.address.city}</p>
            <p>Company : {user.company.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserManagement;