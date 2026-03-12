import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
function AppLayout() {
  return (
    <div className=' flex gap-5'>
      <div >
        <Sidebar />
      </div>
     <div className=' w-full mt-10'>
       <Outlet />
     </div>
    </div>
  )
}

export default AppLayout
