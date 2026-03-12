
import './App.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashoard from './pages/Dashoard'
import TransactionList from './pages/TransactionList'
import AddTransaction from './pages/AddTransaction'
import { transactionsLoader } from './loaders/TransactionsLoader'
import { transactionAction } from './actions/TransactionAction'
import DeleteTransaction from './components/DeleteTransaction'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path ='/' element={<AppLayout />} >
      <Route index element={<Dashoard/>}/>
      <Route path='transactions' element={<TransactionList/>}  loader={transactionsLoader}/>
      <Route path='add' element={<AddTransaction/>} action={transactionAction} />
      <Route path='delete/:transactionId' element={<DeleteTransaction/>} />

    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}



export default App



