import React from "react";

function SearchBar({ search, onSearch, searchRef, onFocus }) {
  return (
    <div>
      <h2>Search Users</h2>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={onSearch}
      />

      <button onClick={onFocus}>
        Focus Search
      </button>
    </div>
  );
}

export default SearchBar;