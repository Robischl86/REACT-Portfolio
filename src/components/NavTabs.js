import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
          About {props.currentPage}
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => props.handlePageChange("Portfolio")} className="nav-link">
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
