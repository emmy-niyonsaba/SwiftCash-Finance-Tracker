
import './App.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<h1>Emmanuel-SwiftCash Finance Tracker</h1>} />
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}



export default App



