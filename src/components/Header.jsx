import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

import dayIcon from '../assets/day.svg'
import nightIcon from '../assets/night.svg'

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className='font-[Poppins] bg-neutral-50 flex justify-between py-6 px-4 shadow-lg items-center'>
      <div>Image</div>
      <nav className='hidden sm:block'>
        <ul className='flex gap-10'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>Home</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>About</NavLink></li>
          <li><NavLink to='/project' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>Projects</NavLink></li>
          <li><NavLink to='/blog' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>Blog</NavLink></li>
        </ul>
      </nav>
      <div>
        <button onClick={toggleDarkMode} className='px-4 py-2'><img className='w-6 h-6' src={darkMode ? dayIcon : nightIcon} alt={darkMode ? "Light Mode" : "Dark Mode"} /></button>
      </div>
    </div>
  )
}
