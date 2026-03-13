
import './App.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import TransactionLayout from './layouts/TransactionLayout'
import Dashboard from './pages/Dashoard'
import TransactionList from './pages/TransactionList'
import AddTransaction from './pages/AddTransaction'
import ViewTransaction from './pages/ViewTransaction'
import NotFound from './pages/NotFound'
import { transactionsLoader } from './loaders/TransactionsLoader'
import { transactionAction } from './actions/TransactionAction'
import DeleteTransaction from './components/DeleteTransaction'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Dashboard />} />

      {/* Transactions section — layout wraps list, add, view, delete */}
      <Route path="transactions" element={<TransactionLayout />}>
        <Route index element={<TransactionList />} loader={transactionsLoader} />
        <Route path="add" element={<AddTransaction />} action={transactionAction} />
        <Route path="view/:transactionId" element={<ViewTransaction />} />
        <Route path="delete/:transactionId" element={<DeleteTransaction />} />
      </Route>

      {/* 404 – catches any unmatched path */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App




