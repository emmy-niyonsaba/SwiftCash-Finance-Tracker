import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
function AppLayout() {
  return (
    <div className=' flex '>
      <div>
        <Sidebar />
      </div>
      <Outlet />
    </div>
  )
}

export default AppLayout
