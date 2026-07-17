import React from "react";

const SwitchConditional = () => {

  const role = "admin";

  switch (role) {

    case "admin":
      return <h1>Welcome Admin</h1>;

    case "teacher":
      return <h1>Welcome Teacher</h1>;

    case "student":
      return <h1>Welcome Student</h1>;

    default:
      return <h1>Unknown User</h1>;
  }

};

export default SwitchConditional;