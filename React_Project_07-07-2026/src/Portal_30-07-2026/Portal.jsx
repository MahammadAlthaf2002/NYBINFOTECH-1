import ReactDOM from "react-dom";

function Portal({ closePortal }) {
  const portalRoot = document.getElementById("portal-root");

  console.log("Portal Root:", portalRoot);

  if (!portalRoot) {
    return <h2>portal-root not found</h2>;
  }

  return ReactDOM.createPortal(
    <div>
      <h2>Welcome to React Portal</h2>

      <button onClick={closePortal}>
        Close
      </button>
    </div>,
    portalRoot
  );
}

export default Portal;