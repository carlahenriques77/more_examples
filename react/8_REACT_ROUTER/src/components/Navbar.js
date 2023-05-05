// 2 - links with react router

import React from "react";

// import / style
import "./Navbar.css";

// import / router dom
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      {/* The difference between this and an "a", is that gi one won't reload the Page */}
    </nav>
  );
}

export default Navbar;
