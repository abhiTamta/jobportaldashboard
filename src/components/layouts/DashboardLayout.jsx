import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = () => {
  const [menuFlod, setMenuFlod] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden relative bg-slate-200">
      <div className="flex h-screen">
        <Sidebar />
        <div className="mainContern relative">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
