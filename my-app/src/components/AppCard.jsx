import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';
import { getAppInitials } from '../data/appData';

const AppCard = ({ app, isInstalledCard = false, onUninstall }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!isInstalledCard) {
      navigate(`/app/${app.id}`);
    }
  };

  // Helper for displaying large numbers
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) return (downloads / 1000000).toFixed(1) + 'M';
    if (downloads >= 1000) return (downloads / 1000).toFixed(1) + 'K';
    return downloads;
  };

  return (
    <div 
      className={`app-card ${isInstalledCard ? 'installed-card' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card-header">
        {/* App Image Placeholder */}
        <div className={app.image}>
          {getAppInitials(app.title)}
        </div>
        
        <div className="card-info">
          <h3 className="card-title" title={app.title}>
            {app.title}
          </h3>
          <p className="card-company">{app.companyName}</p>
        </div>
      </div>

      <div className="card-stats">
        {/* Average Rating */}
        <div className="stat-item stat-rating">
          <FaStar className="icon" />
          <span>{app.ratingAvg.toFixed(1)}</span>
        </div>
        
        {/* Download Count */}
        <div className="stat-item stat-downloads">
          <FaDownload className="icon" />
          <span>{formatDownloads(app.downloads)}</span>
        </div>
      </div>

      {/* Uninstall Button for My Installation Page */}
      {isInstalledCard && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            onUninstall(app.id);
          }}
          className="uninstall-btn"
        >
          Uninstall
        </button>
      )}
    </div>
  );
};

export default AppCard;