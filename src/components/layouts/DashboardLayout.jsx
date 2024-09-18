import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='w-full h-screen relative bg-slate-200'>
        <Header />
        <div className="w-full flex">
          <Sidebar />
          <Outlet />
        </div>
        <Footer />        
    </div>
  )
}

export default DashboardLayout