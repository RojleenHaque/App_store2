import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading content...</p>
    </div>
  );
};

export default LoadingSpinner;