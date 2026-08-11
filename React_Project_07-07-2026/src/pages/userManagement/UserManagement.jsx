import React, { useEffect, useRef, useState } from "react";

import Header from "../../Usermanagement/Header";
import SearchBar from "../../Usermanagement/SearchBar";
import UserList from "../../Usermanagement/UserList";
import UserDetails from "../../Usermanagement/UserDetails";
import Loading from "../../Usermanagement/Loading";
import ErrorMessage from "../../Usermanagement/ErrorMessage";

function UserManagement() {
  var [users, setUsers] = useState([]);
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState("");
  var [search, setSearch] = useState("");
  var [selectedUser, setSelectedUser] = useState(null);

  var searchRef = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleUserSelect(user) {
    setSelectedUser(user);
  }

  function focusSearch() {
    searchRef.current.focus();
  }

  var filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <Header totalUsers={users.length} />

      <SearchBar
        search={search}
        onSearch={handleSearch}
        searchRef={searchRef}
        onFocus={focusSearch}
      />

      <UserList
        users={filteredUsers}
        onUserSelect={handleUserSelect}
      />

      <UserDetails user={selectedUser} />
    </div>
  );
}

export default UserManagement;