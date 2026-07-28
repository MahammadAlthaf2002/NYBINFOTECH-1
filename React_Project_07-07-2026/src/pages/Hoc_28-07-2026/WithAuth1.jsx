import Dashboard from "../../Hoc_28-07-2026/Dashboard";
import withAuth from "../../Hoc_28-07-2026/WithAuth";

const ProtectedDashboard = withAuth(Dashboard);

function WithAuth1() {
  return (
    <div>
      <ProtectedDashboard name="Althaf" />
    </div>
  );
}

export default WithAuth1;