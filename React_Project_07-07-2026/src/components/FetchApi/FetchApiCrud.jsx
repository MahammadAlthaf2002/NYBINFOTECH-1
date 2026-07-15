import { useEffect, useState } from "react";

function FetchApiCurd() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  const addUser = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Althaf",
        email: "althaf@gmail.com",
      }),
    });

    alert("User Added");
  };

  const updateUser = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Updated User",
      }),
    });

    alert("User Updated");
  };

  const patchUser = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "new@gmail.com",
      }),
    });

    alert("User Patched");
  };

  const deleteUser = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE",
    });

    alert("User Deleted");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <button onClick={addUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={patchUser}>PATCH</button>
      <button onClick={deleteUser}>DELETE</button>

      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default FetchApiCurd;