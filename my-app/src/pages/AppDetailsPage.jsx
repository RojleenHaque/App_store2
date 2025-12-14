import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaDownload, FaUser, FaLock } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../context/AppContext';
import { getAppInitials } from '../data/appData';

const AppDetailsPage = () => {
  const { appId } = useParams();
  const id = parseInt(appId);
  const { findAppById, installApp, isAppInstalled } = useAppContext();
  
  // 1. Find App
  const app = findAppById(id);
  
  // Handle App Not Found (Challenge Requirement)
  if (!app) {
    return (
      <div className="not-found-container">
        <h1 className="text-red">404</h1>
        <h2 className="text-red-500">App Not Found!</h2>
        <p>
          The application you are looking for does not exist in our store.
        </p>
        <Link to="/apps" className="banner-btn primary-btn">
            Browse All Apps
        </Link>
      </div>
    );
  }

  // 2. Install Button Logic
  const installed = isAppInstalled(id);

  const handleInstallClick = () => {
    if (installed) return;
    installApp(id);
  };

  // Helper for displaying numbers
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  // 3. Prepare Chart Data
  const chartData = app.ratings.map(r => ({
    name: r.name.replace(' star', ''), // Clean up labels for chart
    Reviews: r.count,
  })).reverse(); 

  return (
    <div className="page-section container">
      
      {/* App Information Section */}
      <div className="details-header">
        
        {/* App Image (Left) */}
        <div className={app.image + " details-logo"} title={app.title}>
            {getAppInitials(app.title)}
        </div>

        {/* Details (Right) */}
        <div className="details-info">
          <h1>{app.title}</h1>
          <p>{app.companyName}</p>

          {/* Stats Row */}
          <div className="details-stats-row">
            <StatItem icon={FaStar} value={app.ratingAvg.toFixed(1)} label="Avg Rating" color="text-amber" />
            <StatItem icon={FaDownload} value={formatNumber(app.downloads)} label="Downloads" color="text-primary" />
            <StatItem icon={FaUser} value={formatNumber(app.reviews)} label="Reviews" color="text-indigo" />
            <StatItem icon={FaLock} value={`${app.size.toFixed(1)} MB`} label="Size" color="text-gray" />
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstallClick}
            disabled={installed}
            className={`install-btn ${installed ? '' : 'active'}`}
          >
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>
      </div>

      <div className="details-grid">
        
        {/* App Description (Left Column) */}
        <div className="details-panel description-panel">
          <h2>Description</h2>
          <p className="description-text">{app.description}</p>
          <p className="description-meta">
            Version: 2.1.0 | Updated: Nov 2025 | Requires Android/iOS 12+
          </p>
        </div>

        {/* App Review Chart (Right Column) */}
        <div className="details-panel chart-panel">
          <h2>User Reviews</h2>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis allowDecimals={false} stroke="#6B7280" />
                <Tooltip 
                  cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #D1D5DB', borderRadius: '4px' }}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Bar 
                  dataKey="Reviews" 
                  fill="#10B981" 
                  radius={[4, 4, 0, 0]} 
                  maxBarSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

// Simple reusable stat item
const StatItem = ({ icon: Icon, value, label, color }) => (
  <div className={`details-stat-item ${color}`}>
    <Icon className="icon" />
    <p className="value">{value}</p>
    <p className="label">{label}</p>
  </div>
);

export default AppDetailsPage;