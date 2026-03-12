
import './App.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />} >
      <Route path='/' element={<h1>Dashboard</h1>} />
      <Route path='/transactions' element={<h1>Ledger</h1>} />
      <Route path='/transactions/add' element={<h1>Add Transaction</h1>} />

    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}



export default App



