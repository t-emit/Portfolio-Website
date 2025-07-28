// src/components/SharedLayout.jsx

import { Outlet } from 'react-router-dom'; // <-- IMPORTANT
import Footer from './Footer'; // Assuming you want the footer on all pages too

// This component will have your navbar and will wrap your pages
export default function SharedLayout({ darkMode, setDarkMode }) {
  return (
    <div className="relative z-10">
      {/* YOUR NAVBAR - It now lives here */}
      <div className="sticky top-0 z-50 p-4 flex justify-between items-center shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4">
          <a href="/About" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800 dark:border-transparent dark:shadow-none dark:hover:bg-gray-700">About Me</a>
          <a href="/AllPprojectsPage" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800 dark:border-transparent dark:shadow-none dark:hover:bg-gray-700">Projects</a>
          <a href="/Achievements" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800 dark:border-transparent dark:shadow-none dark:hover:bg-gray-700">Achievements</a>
          <a href="/skill" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800 dark:border-transparent dark:shadow-none dark:hover:bg-gray-700">Skills</a>
          <a href="/Resume" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800 dark:border-transparent dark:shadow-none dark:hover:bg-gray-700">Resume</a>
          <a href="/Contact" className="nav-glow px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-800 dark:border-transparent dark:shadow-none dark:hover:bg-gray-700">Contact</a>
        </nav>

        {/* Dark Mode Toggle Button */}
        <div className="toggle-wrapper p-0">
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn glow-card dark:bg-gray-900 bg-white dark:border-gray-500 dark:shadow-none">
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      {/* This Outlet will render the correct page content */}
      <main>
        <Outlet />
      </main>
      
      {/* Your footer can also be part of the shared layout */}
      <Footer />
    </div>
  );
}