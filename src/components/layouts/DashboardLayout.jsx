import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative bg-slate-200'>
      <Header />
      <div className="w-full h-[92vh] flex">
        <div className="siderBarNav bg-white w-2/12">
          <Sidebar />
        </div>
        <div className="dashboardContent w-10/12 overflow-y-auto">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout