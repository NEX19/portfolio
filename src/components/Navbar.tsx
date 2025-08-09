import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <div
        className="navbar-options"
        style={{
          display: "flex",
          padding: "10px",
          gap: "10px",
          backgroundColor: "#000",
        }}
      >
        <div>
          <NavLink
            style={{ backgroundColor: "white" }}
            className="text-xl"
            to="/"
            end
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{ backgroundColor: "white" }}
            className="text-xl"
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
