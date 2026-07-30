import { useState } from "react";
import Portal2 from "./Portal2";

function PortalApp2() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Portal Example</h1>

      <button onClick={() => setShow(true)}>
        Open Modal
      </button>

      {show && (
        <Portal2 closePortal={() => setShow(false)} />
      )}
    </div>
  );
}

export default PortalApp2;