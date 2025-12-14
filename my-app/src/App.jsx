import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllAppsPage from './pages/AllAppPages';
import AppDetailsPage from './pages/AppDetailsPage';
import MyInstallationPage from './pages/MyInstallationPage';
import NotFoundPage from './pages/NotFoundPage';
import { AppProvider } from './context/AppContext';
import LoadingSpinner from './components/LoadingSpinner';

// Custom component to handle loading animation during navigation (Challenge Requirement)
const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate navigation load start
    setLoading(true);

    // Simulate navigation load end (adjust time as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div style={{ minHeight: '60vh' }}>
        <LoadingSpinner />
      </div>
    );
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <AppProvider>
        <div className="app-wrapper">
          <Header />
          <main className="main-content">
            {/* Toaster for notifications */}
            <Toaster position="top-right" reverseOrder={false} />
            
            <Routes>
              {/* Wrap all routes in RouteWrapper for navigation loading animation */}
              <Route path="/" element={<RouteWrapper><HomePage /></RouteWrapper>} />
              <Route path="/apps" element={<RouteWrapper><AllAppsPage /></RouteWrapper>} />
              <Route path="/installation" element={<RouteWrapper><MyInstallationPage /></RouteWrapper>} />
              <Route path="/app/:appId" element={<RouteWrapper><AppDetailsPage /></RouteWrapper>} />
              
              {/* Error Page */}
              <Route path="*" element={<RouteWrapper><NotFoundPage /></RouteWrapper>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;