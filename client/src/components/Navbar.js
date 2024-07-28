import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/contact" className="link">Contact</Link>
      <Link to="/projects" className="link">Projects</Link>
    </nav>
  );
};

export default Navbar;
