// src/components/SharedLayout.js

import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

// This component contains the elements visible on every page (Navbar, Footer)
export default function SharedLayout({ darkMode, setDarkMode }) {
  return (
    <div className="relative z-10">
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 p-4 flex justify-between items-center shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        {/* Navigation Links - CRITICAL: Use <Link> and 'to', not <a> and 'href' */}
        <nav className="flex flex-wrap gap-4">
          <Link to="/about" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">About Me</Link>
          <Link to="/projects" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Projects</Link>
          <Link to="/achievements" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Achievements</Link>
          <Link to="/skills" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Skills</Link>
          <Link to="/resume" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Resume</Link>
          {/* The '/#contact' format navigates to the homepage and then scrolls to the #contact section */}
          <Link to="/#contact" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800">Contact</Link>
        </nav>

        {/* Dark Mode Toggle Button */}
        <div className="toggle-wrapper p-0">
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn glow-card dark:bg-gray-900 bg-white dark:border-gray-500">
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      {/* This Outlet is where React Router will render the current page's component */}
      <main>
        <Outlet />
      </main>
      
      {/* The footer is also part of the shared layout, so it appears on every page */}
      <Footer />
    </div>
  );
}