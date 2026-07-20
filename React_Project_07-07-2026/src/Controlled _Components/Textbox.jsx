import React, { useState } from "react";

function Controlled4() {

  const [agree, setAgree] = useState(false);

  return (

    <div>

      <input
        type="checkbox"
        checked={agree}
        onChange={(e)=>setAgree(e.target.checked)}
      />

      <h3>

        {agree ? "Accepted" : "Not Accepted"}

      </h3>

    </div>

  );
}

export default Controlled4;