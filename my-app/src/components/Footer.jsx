import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Logo and Tagline */}
          <div>
            <h3 className='footer-name'>HeroApp Store</h3>
            <p className="text-sm">
              Discover, download, and dominate. Your one stop for the best mobile applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/apps">All Apps</Link></li>
              <li><Link to="/installation">My Installations</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4>Connect</h4>
            <div className="social-links">
              <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
              <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
              <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} HeroApp Store. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;