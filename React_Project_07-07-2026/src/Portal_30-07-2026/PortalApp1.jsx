import { useState } from "react";
import Portal from "./Portal1";

function PortalApp1() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Portal Modal Example</h1>

      <button onClick={() => setShow(true)}>
        Open Modal
      </button>

      {show && (
        <Portal closePortal={() => setShow(false)} />
      )}
    </div>
  );
}

export default PortalApp1;