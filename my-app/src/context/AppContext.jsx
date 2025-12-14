import React, { createContext, useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { appsData } from '../data/appData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const allApps = appsData;

  // 1. Load installed apps from localStorage on mount (Challenge Requirement)
  useEffect(() => {
    const storedApps = localStorage.getItem('installedApps');
    if (storedApps) {
      setInstalledApps(JSON.parse(storedApps));
    }
  }, []);

  // 2. Update localStorage when installedApps state changes
  useEffect(() => {
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
  }, [installedApps]);

  // Helper function to find an app by ID
  const findAppById = (id) => allApps.find(app => app.id === id);

  // 3. App Installation Logic (Challenge Requirement)
  const installApp = (appId) => {
    if (installedApps.includes(appId)) return;

    setInstalledApps((prev) => [...prev, appId]);
    toast.success(`${findAppById(appId).title} installed successfully!`);
  };

  // 4. App Uninstallation Logic (Challenge Requirement)
  const uninstallApp = (appId) => {
    setInstalledApps((prev) => prev.filter(id => id !== appId));
    toast.error(`${findAppById(appId).title} uninstalled.`);
  };

  // 5. Get detailed list of installed apps
  const getInstalledAppsDetails = () => {
    return allApps.filter(app => installedApps.includes(app.id));
  }

  const value = {
    allApps,
    installedApps,
    installApp,
    uninstallApp,
    isAppInstalled: (appId) => installedApps.includes(appId),
    getInstalledAppsDetails,
    findAppById,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};