import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <i
        className="fas fa-book fa-2x"
        style={{ color: "white", marginRight: "10px" }}
      ></i>
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <ul className="nav-links">
        <li className="nav-item">
          {" "}
          <a href="/pages/search" style={{ color: "white" }}>
            Search
          </a>
        </li>

        <li className="nav-item">
          <a href="/pages/saved" style={{ color: "white" }}>
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
