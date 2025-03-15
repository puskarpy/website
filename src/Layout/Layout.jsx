import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Dock from '../components/Dock'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Dock />
    </>
  )
}
