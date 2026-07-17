import React from "react";

const AndConditional = () => {

  const isAdmin = true;

  return (
    <div>

      {isAdmin && <h1>Welcome Admin</h1>}

    </div>
  );

};

export default AndConditional;