'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaGraduationCap, FaBlog, FaTools, FaBriefcase } from 'react-icons/fa';
import { SiTestinglibrary } from 'react-icons/si';
import { Sparkles } from 'lucide-react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode preference using localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', !darkMode);
      localStorage.setItem('darkMode', (!darkMode).toString()); // Save the theme preference
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full flex items-center justify-between px-10 py-5 fixed top-0 z-50 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 dark:from-gray-900 dark:via-gray-700 dark:to-black shadow-lg"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      {/* Left side: Buttons */}
      <div className="flex items-center gap-6 flex-wrap">
        <NavButton label="Home" icon={<FaHome />} targetId="top" />
        <NavButton label="About" icon={<FaUser />} targetId="about" />
        <NavButton label="Education" icon={<FaGraduationCap />} targetId="education" />
        <NavButton label="Skills" icon={<FaTools />} targetId="skills" />
        <NavButton label="Blog" icon={<FaBlog />} targetId="web-projects" />
        <NavButton label="Projects" icon={<SiTestinglibrary />} targetId="testing-projects" />
        <NavButton label="Work" icon={<FaBriefcase />} targetId="work" />
      </div>

      {/* Middle: Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
        className="flex items-center gap-3"
      >
        <Sparkles className="text-yellow-300 w-10 h-10 animate-bounce" />
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide">Code with Chris</h1>
      </motion.div>

      {/* Right side: Theme Toggle */}
      <motion.button
        whileTap={{ rotate: 360 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={toggleTheme}
        className="p-3 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-md hover:scale-110 transition-transform"
      >
        {darkMode ? (
          <MdLightMode className="text-yellow-300 text-2xl" />
        ) : (
          <MdDarkMode className="text-white text-2xl" />
        )}
      </motion.button>
    </motion.nav>
  );
}

function NavButton({
  label,
  icon,
  targetId,
}: {
  label: string;
  icon: React.ReactNode;
  targetId?: string;
}) {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 dark:hover:bg-gray-700 text-white dark:text-gray-300 px-3 py-2 rounded-xl text-base md:text-lg font-semibold shadow-md backdrop-blur-md transition-all"
    >
      <span className="text-xl">{icon}</span>
      {label}
    </motion.button>
  );
}
