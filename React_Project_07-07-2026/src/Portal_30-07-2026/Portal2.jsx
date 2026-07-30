import ReactDOM from "react-dom";

function Portal2({ closePortal }) {
  const portalRoot = document.getElementById("portal-root");

  console.log("Portal Root:", portalRoot);

  if (!portalRoot) {
    return <h2>portal-root not found</h2>;
  }

  return ReactDOM.createPortal(
    <div style={overlayStyle} onClick={closePortal}>
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>React Portal</h2>

        <p>Click outside this box to close the modal.</p>

        <button onClick={closePortal}>Close</button>
      </div>
    </div>,
    portalRoot
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
};

export default Portal2;