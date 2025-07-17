import React from 'react';
import './navbar.css';

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="portfolio-title">
          <span style={{ color: '#4fc3f7' }}>Chaitanya portfolio </span> 
        </span>
      </div>
      <div className="nav-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#certifications">Certifications</a>
        <a href="#experience">Experience</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


