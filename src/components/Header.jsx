// src/components/Header.jsx
import '../index.css';
function Header() {
  return (
    <header className="header">
       {/* 
        We replaced 'animate-glow-outline' with our new 'typewriter' class.
        The other Tailwind classes for font size and alignment remain.
      */}
      <h1 className="text-4xl font-bold text-center typewriter-glow">
        Talat Siddiqui
      </h1>
      
      {/* Adjusted subtitle for better contrast and style */}
      <p className="text-lg mt-2 font-semibold text-gray-800 dark:text-gray-200">
        Full Stack Developer | AI & ML Enthusiast
      </p>
    </header>
  );
}

export default Header;