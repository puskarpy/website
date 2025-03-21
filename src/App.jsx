import React, { PureComponent, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import { ThemeProvider } from './contexts/ThemeContext'
function App() {

  const [themeMode, setthemeMode] = useState("light")

  const lightTheme = () => {
    setthemeMode("light")
  }
  const darkTheme = () => {
    setthemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])



  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='font-[Poppins] dark:bg-[#0D1117]'>
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
    </ThemeProvider>
  )
}

export default App
