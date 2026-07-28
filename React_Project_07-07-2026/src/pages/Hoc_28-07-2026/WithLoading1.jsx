import UserList from "../../Hoc_28-07-2026/UserList";
import withLoading from "../../Hoc_28-07-2026/withLoading";

const UserListWithLoading = withLoading(UserList);

function WithLoading1() {
  const loading = false;

  const users = [
    { id: 1, name: "Althaf" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aisha" },
  ];

  return (
    <div>
      <UserListWithLoading
        loading={loading}
        users={users}
      />
    </div>
  );
}

export default WithLoading1;