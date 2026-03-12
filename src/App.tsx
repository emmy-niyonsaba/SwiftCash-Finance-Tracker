
import './App.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashoard from './pages/Dashoard'
import TransactionList from './pages/TransactionList'
import AddTransaction from './pages/AddTransaction'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path ='/' element={<AppLayout />} >
      <Route index element={<Dashoard/>}/>
      <Route path='transactions' element={<TransactionList/>} />
      <Route path='transactions/add' element={<AddTransaction/>} />

    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}



export default App



