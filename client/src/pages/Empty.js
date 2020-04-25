import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
