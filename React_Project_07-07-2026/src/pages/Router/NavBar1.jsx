import { Link } from "react-router-dom";

function NavBar1() {
  return (
    <nav
      style={{
        background: "#1976d2",
        padding: "15px",
        display: "flex",
        gap: "25px"
      }}
    >
      <Link style={{ color: "white" }} to="/home">
        Home
      </Link>

      <Link style={{ color: "white" }} to="/students">
        Students
      </Link>

      <Link style={{ color: "white" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar1;