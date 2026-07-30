import { useState } from "react";
import Portal from "./Portal";

function PortalApp() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React Portal Example</h1>

      <button onClick={() => setShow(true)}>
        Open Portal
      </button>

      {show && (
        <Portal closePortal={() => setShow(false)} />
      )}
    </div>
  );
}

export default PortalApp;