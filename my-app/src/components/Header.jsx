import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';


const Header = () => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/apps', label: 'Apps' },
    { to: '/installation', label: 'My Installation' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          
          {/* Logo - Navigates to Home */}
          <Link to="/" className="logo">
          <img src="src/assets/logo.png" className="logo-image" />
            <span className='full-text'>HERO.IO</span>
          </Link>

          {/* Navigation Links */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Contribution Button */}
          <a
            href="YOUR_GITHUB_PROFILE_URL" 
            target="_blank"
            rel="noopener noreferrer"
            className="contribution-btn"
          >
            <FaGithub className="icon" />
            Contribution
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;