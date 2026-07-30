import ReactDOM from "react-dom";

function Portal1({ closePortal }) {
  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>React Portal Modal</h2>
        <p>This modal is rendered using React Portal.</p>

        <button onClick={closePortal}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

export default Portal1;