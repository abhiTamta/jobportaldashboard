import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='w-full h-screen relative'>
        <Header />
        <Outlet />
        <Footer />        
    </div>
  )
}

export default DashboardLayout