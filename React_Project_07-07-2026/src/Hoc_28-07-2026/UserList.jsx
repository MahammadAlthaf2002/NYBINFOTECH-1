function UserList({ users }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default UserList;