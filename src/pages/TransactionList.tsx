
import type { Transaction } from "../types/FinancialTypes";
import { Link } from "react-router-dom";


const removeTransaction = (index: number) => {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  transactions.splice(index, 1);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  window.location.reload();
}
function TransactionList() {
 const transactions =  JSON.parse(localStorage.getItem("transactions") || "[]");
  


  return (
    <div>
      <h1>Transaction List</h1>
      {
        transactions.length > 0 ? (
          <ul>
            {transactions.map((transaction: Transaction, index: number) => (
              <div className=" bg-blue-300 text-sm mt-10 g-10 rounded-lg mb-4  p-4 flex justify-between   items-center " key={index}>

              <li key={index} className=" p-4 flex justify-around items-center">
                <p>Amount: {transaction.amount}</p>
                <p>Description: {transaction.description}</p> 
              </li>
              <button 
              className="font-bold text-red-500 py-2 px-2 hover:cursor-pointer rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
              onClick={() => removeTransaction(index)}
              >Remove</button>
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
