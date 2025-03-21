import React from 'react'
import { NavLink } from 'react-router-dom'
import useTheme from '../contexts/ThemeContext'
import { useState } from 'react'

import dayIcon from '../assets/day.svg'
import nightIcon from '../assets/night.svg'

export default function Header() {

  const { themeMode, lightTheme, darkTheme } = useTheme()

  const toggleDarkMode = (e) => {
    const currentMode = e.currentTarget.checked
    if (currentMode) {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  return (
    <div className='font-[Poppins] bg-neutral-50 flex justify-between dark:bg-[#0D1117] dark:text-[#C9D1D9] py-6 px-4 dark:shadow-2xl shadow-lg items-center'>
      <div>Image</div>
      <nav className='hidden sm:block'>
        <ul className='flex gap-10'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : "dark:text-[#C9D1D9] text-gray-900"}>Home</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-500" : "dark:text-[#C9D1D9] text-gray-900"}>About</NavLink></li>
          <li><NavLink to='/project' className={({ isActive }) => isActive ? "text-blue-500" : "dark:text-[#C9D1D9] text-gray-900"}>Projects</NavLink></li>
          <li><NavLink to='/blog' className={({ isActive }) => isActive ? "text-blue-500" : "dark:text-[#C9D1D9] text-gray-900"}>Blog</NavLink></li>
        </ul>
      </nav>
      <div>
        <label className="toggle text-base-content">
          <input type="checkbox" checked={themeMode === "dark"} onChange={toggleDarkMode} value="synthwave" className="theme-controller" />

          <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

        </label>
      </div>
    </div>
  )
}
