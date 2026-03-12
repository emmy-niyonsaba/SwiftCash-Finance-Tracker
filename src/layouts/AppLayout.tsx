import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
function AppLayout() {
  return (
    <div className=' flex'>
      <div >
        <Sidebar />
      </div>
     <div className=' w-full bg-amber-200'>
       <Outlet />
     </div>
    </div>
  )
}

export default AppLayout
