// src/App.jsx (or MainApp.jsx)

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout and Page components
import SharedLayout from './SharedLayout'; // <-- NEW
import HomePage from './HomePage';         // <-- NEW
import AllProjectsPage from './AllProjectsPage';

// Import background components
import Background from './Background';
import DBackground from './DBackground';
// import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      {darkMode && <DBackground />}
      
      {/* This routing structure ensures the Navbar is always present */}
      <BrowserRouter basename="/Portfolio-Website">
      <Routes>
        <Route 
          path="/" 
          element={<SharedLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          {/* The index route is the default page shown inside the SharedLayout */}
          <Route index element={<HomePage />} />
          
          {/* The projects route will also be shown inside the SharedLayout */}
          <Route path="projects" element={<AllProjectsPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;