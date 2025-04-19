/* Milan Morasiya and Harshil Katrodiya */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="Applelogo.png" alt="Apple" className="apple-logo" />
          <span className="logoText">Apple Arcade</span>
        </Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/iwatch">iWatch</Link></li>
        <li><Link to="/iphone">iPhone</Link></li>
        <li><Link to="/macbook">MacBook</Link></li>
        <li><Link to="/airpod">Airpods</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
