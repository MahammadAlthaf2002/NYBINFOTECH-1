import React, { memo } from "react";

function UserMemo() {
  console.log("UserMemo Rendered");

  return (
    <div>
      <h2>Name : John</h2>
      <h2>Age : 25</h2>
    </div>
  );
}

export default memo(UserMemo);