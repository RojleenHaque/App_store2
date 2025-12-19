import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
              <img className="img" src="/src/assets/App-error.png"></img>
      <h1>
        OPPS !! APP NOT FOUND
      </h1>
      <p>The page you are requesting is not found on our system. please try another apps.</p>
      <Link 
        to="/" 
        className="banner-btn primary-btn"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default NotFoundPage;