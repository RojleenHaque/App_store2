import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import AppCard from '../components/AppCard';
import { useAppContext } from '../context/AppContext';

const MyInstallationPage = () => {
  const { getInstalledAppsDetails, uninstallApp } = useAppContext();
  const installedApps = getInstalledAppsDetails();

  // The onUninstall prop is passed to the AppCard which handles the click event
  const handleUninstall = (appId) => {
    uninstallApp(appId);
  };

  return (
    <div className="page-section container">
      
      <div className="title-section">
        <h1>My Installations</h1>
        <p>
          You have <span className="text-primary">{installedApps.length}</span> apps currently installed.
        </p>
      </div>

      {installedApps.length > 0 ? (
        <div className="app-grid installed-grid">
          {installedApps.map((app) => (
            <AppCard 
              key={app.id} 
              app={app} 
              isInstalledCard={true} // Triggers the card to display the Uninstall button
              onUninstall={handleUninstall} 
            />
          ))}
        </div>
      ) : (
        /* No Installed Apps Message */
        <div className="empty-installation-message">
          <FaTrashAlt className="icon" />
          <h2>No Apps Installed</h2>
          <p>
            Visit the <a href="/apps">All Apps</a> page to start installing applications.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyInstallationPage;