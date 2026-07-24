import React, { useEffect, useState } from "react";

// Higher Order Component
const withLoading = (Component) => {
  return function EnhancedComponent({ loading, ...props }) {
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return <Component {...props} />;
  };
};

// User List Component
const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <h3>No Users Found</h3>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

const UserListWithLoading = withLoading(UserList);

const FinalProject = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // API Integration
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to Fetch Data");
        setLoading(false);
      });
  }, []);

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Please Fill All Fields");
      return;
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Final Mini Project</h1>

      {/* Dynamic Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add User</button>
      </form>

      <hr />

      {/* Error State */}
      {error && <h2>{error}</h2>}

      {/* HOC + Loading + map + Conditional Rendering */}
      <UserListWithLoading loading={loading} users={users} />
    </div>
  );
};

export default FinalProject;