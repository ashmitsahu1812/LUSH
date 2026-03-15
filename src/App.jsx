import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ArchitecturePage from './components/ArchitecturePage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import InteriorPage from './components/InteriorPage';
import LandscapePage from './components/LandscapePage';
import ManagementPage from './components/ManagementPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <CustomCursor />

      {loading && <PageLoader onComplete={() => setLoading(false)} />}

      <Header onMenuClick={() => setNavOpen(true)} />
      <Navbar isOpen={navOpen} onClose={() => setNavOpen(false)} />

      <main className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home setNavOpen={setNavOpen} />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/architecture/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/landscape" element={<LandscapePage />} />
          <Route path="/management" element={<ManagementPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
