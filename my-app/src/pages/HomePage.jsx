import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
import AppCard from '../components/AppCard';
import { useAppContext } from '../context/AppContext';


// Helper to format large numbers
const formatStats = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
  return num;
};

const HomePage = () => {
  const { allApps } = useAppContext();

  // Sort apps by downloads in descending order and take the top 8
  const topApps = [...allApps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);
    
  // Calculate aggregated stats for the "States Section"
  const totalApps = allApps.length;
  const totalDownloads = allApps.reduce((acc, app) => acc + app.downloads, 0);
  const avgRating = (allApps.reduce((acc, app) => acc + app.ratingAvg, 0) / totalApps).toFixed(1);

  const stats = [
    { icon: FaMobileAlt, value: totalApps, label: 'Available Apps', unit: '' },
    { icon: FaCloudDownloadAlt, value: totalDownloads, label: 'Total Downloads', unit: '' },
    { icon: FaStar, value: avgRating, label: 'Average Rating', unit: '/ 5.0' },
  ];

  return (
    <div className="page-section container">
      
      {/* 1. Banner Section */}
      <div className="banner">
        <h1>
          <span>We build</span><br/><span className='productive'>Productive </span><span>Apps</span>
        </h1>
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="banner-actions">
          <a href="APP_STORE_LINK" target="_blank" rel="noopener noreferrer" className="banner-btn primary-btn">
            Google Play
          </a>
          <a href="PLAY_STORE_LINK" target="_blank" rel="noopener noreferrer" className="banner-btn secondary-btn">
            App Store
          </a>
          
        </div>
        <img className="hero-image" src="/src/assets/hero.png"></img>
      </div>

      {/* 2. States Section */}
      <section>
         <p className='para'>Trusted By Millions, Built For You</p>
        <div className="stats-grid">

        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <stat.icon className="stat-icon" />
            <p className="stat-value">
              {formatStats(stat.value)}
              <span className="stat-unit">{stat.unit}</span>
            </p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
        </div>
      </section>

{/* 3. Top Apps Section */}
<section className="top-apps-section">
  <div className="apps-header">
    <h1 className="apps-title">Trending Apps</h1>
    <h4 className="apps-subtitle">
      Explore all the trending apps on the market developed by us
    </h4>
  </div>

  <div className="app-grid">
    {topApps.map((app) => (
      <AppCard key={app.id} app={app} />
    ))}
  </div>

  <div className="show-all-wrapper">
    <Link to="/apps" className="show-all-btn">
      Show All
    </Link>
  </div>
</section>


    </div>
  );
};

export default HomePage;