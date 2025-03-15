import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <div className='font-[Poppins]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
