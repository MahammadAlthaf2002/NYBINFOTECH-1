import React from "react";

const IfConditional = () => {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  }

  return <h1>Please Login</h1>;
};

export default IfConditional;


