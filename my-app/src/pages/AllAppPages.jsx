import React, { useState, useMemo, useEffect } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAppContext } from '../context/AppContext';

const AllAppsPage = () => {
  const { allApps } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('downloads-desc'); // high-low (desc)
  const [isLoading, setIsLoading] = useState(false);

  // 1. Loading Simulation for Search/Sort (Challenge Requirement)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // 500ms delay for visual effect
      return () => clearTimeout(timer);
    }
  }, [isLoading, searchTerm, sortBy]);
  
  const handleSearchChange = (e) => {
    setIsLoading(true);
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setIsLoading(true);
    setSortBy(e.target.value);
  };

  // 2. Filter and Sort Logic (Main Requirement)
  const filteredAndSortedApps = useMemo(() => {
    let filtered = allApps.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
      case 'downloads-desc': // High-Low
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'downloads-asc': // Low-High
        filtered.sort((a, b) => a.downloads - b.downloads);
        break;
      default:
        break;
    }

    return filtered;
  }, [allApps, searchTerm, sortBy]);


  return (
    <div className="page-section container">
      
      {/* Title Section */}
      <div className="title-section">
        <h1>Our All Applications</h1>
        <p>Explore all the apps on the market developed by uss. We code for millions {allApps.length} applications in the HeroApp Store.</p>
      </div>

      {/* Search, States, and Sort */}
      <div className="search-filter-bar">
        {/* Total Apps Count */}
        <p className="app-count">
       <span>{filteredAndSortedApps.length}</span>  Apps Found
        </p>
        
        <div className="search-controls">
          {/* Search Bar */}
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search apps by title..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>

    
        </div>
      </div>

      {/* App Section */}
      {isLoading ? (
        <LoadingSpinner />
      ) : filteredAndSortedApps.length > 0 ? (
        <div className="app-grid">
          {filteredAndSortedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        /* No App Found Message */
        <div className="no-app-found">
          <h2>No App Found</h2>
          <p>
            Try adjusting your search term or changing the sorting option.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllAppsPage;