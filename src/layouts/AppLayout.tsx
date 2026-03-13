import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
