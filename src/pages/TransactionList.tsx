
import type { Transaction } from "../types/FinancialTypes";
import { Link } from "react-router-dom";
function TransactionList() {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");



  return (
    <div>
      <div className=" flex justify-around items-center">
        <h1 className=' text-2xl font-bold'>Transaction List</h1>
        <Link
          to="/add"
          className="bg-blue-500 text-white py-2 px-3 rounded-lg cursor-pointer hover:bg-blue-600 transition"
        >
          Add New Transaction
        </Link>
      </div>
      {
        transactions.length > 0 ? (
          <ul>
            {transactions.map((transaction: Transaction, index: number) => (
              <div className=" bg-blue-300 text-sm mt-10 g-10 rounded-lg mb-4  flex justify-between   items-center " key={index}>

                <li key={index} className=" p-4 flex justify-between items-center">
                  <p>Amount: {transaction.amount}</p>
                  <p>Description: {transaction.description}</p>
                </li>
                <Link to={`/delete/${index}`} className=" text-2xl text-red-400">delete</Link>
              </div>
            ))}
          </ul>
        ) : (
          <p>No transactions found.</p>
        )

      }
    </div>
  )
}

export default TransactionList
