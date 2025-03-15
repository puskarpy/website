import React from 'react'
import { NavLink } from 'react-router-dom'
import icon1 from '../assets/home.svg'
import icon2 from '../assets/profile.svg'
import icon3 from '../assets/code.svg'
import icon4 from '../assets/blog.svg'

export default function Dock() {
    return (
        <div className="dock sm:hidden dock-md">
            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>
                <img src={icon1} alt="home" className='w-6 h-6' />
                <span className="dock-label">Home</span>
            </NavLink>

            <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>
                <img src={icon2} alt="about" className='w-6 h-6' />
                <span className="dock-label">About</span>
            </NavLink>

            <NavLink to='/project' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>
                <img src={icon3} alt="projects" className='w-6 h-6' />
                <span className="dock-label">Projects</span>
            </NavLink>
            <NavLink to='/blog' className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-900"}>
                <img src={icon4} alt="blog" className='w-6 h-6' />
                <span className="dock-label">Blog</span>
            </NavLink>
        </div>
    )
}
