import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header1">
      <div className="header-container">
        {/* Website Logo/Name */}
        <div className="logo-container">
          <h1 className="website-name">YourCompany</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/templates" className="nav-link">
            Templates
          </a>
          <button className="demo-button">
            Book a Demo
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="mobile-menu-button">
          <button 
            onClick={toggleMenu}
            className="menu-toggle"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-links">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/templates" className="nav-link">
              Templates
            </a>
            <button className="demo-button mobile-demo-button">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;