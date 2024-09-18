import { Avatar, Dropdown } from 'antd'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className='w-full bg-slate-500 h-16 px-5 flex justify-between items-center'>
      <div className="brand">
        <div className=""></div>
        <div className="text-2xl font-bold text-slate-100">Pixels Jobs</div>
      </div>
      <div className="">
        <Dropdown>
          <Avatar size={64} icon={<FaUserCircle />} />
        </Dropdown>
      </div>
    </nav>
  )
}

export default Header