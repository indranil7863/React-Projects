import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>Router Logo</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/jobs">Jobs</Link>
      </div>
      <button className="get-started">Get started</button>
    </div>
  );
};

export default Navbar;
