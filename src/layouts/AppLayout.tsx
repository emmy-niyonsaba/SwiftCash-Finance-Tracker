import { Outlet, useNavigation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function AppLayout() {
  const navigation = useNavigation()
  const isNavigating = navigation.state === 'loading' || navigation.state === 'submitting'

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {isNavigating && (
          <div className="sticky top-0 z-30">
            <div className="h-1 w-full overflow-hidden bg-slate-200">
              <div className="h-full w-1/3 animate-pulse bg-emerald-500" />
            </div>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
