
import type { Transaction } from "../types/FinancialTypes";
import { Link,NavLink,useSearchParams} from "react-router-dom";


// const removeTransaction=(index:number)=>{
//   const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
//   const updatedTransactions = transactions.filter((_: Transaction, i: number) => i !== index);
//   localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
// }
function TransactionList() {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
   const [searchParams,setSearchParams] = useSearchParams();
   const type = searchParams.get("type");
   
   const filteredTransactions = searchParams.get("type") ? transactions.filter((transaction: Transaction) => transaction.type === searchParams.get("type")) : transactions;

  return (
    <div className=" max-w-4xl mx-auto mt-10 p-5">
      <div className="flex gap-6">
      
      <NavLink
        to="/transactions?type=income"
        className={
          type === "income"
            ? "text-white font-bold bg-blue-600 rounded-md p-2"
            : "text-black font-bold"
        }
      >
        Income
      </NavLink>

      <NavLink
        to="/transactions?type=expense"
        className={
          type === "expense"
            ? "text-white font-bold bg-blue-600 rounded-md p-2"
            : "text-black font-bold"
        }
      >
        Expense
      </NavLink>

    </div>
      {
        filteredTransactions.length > 0 ? (
          <ul>
            {filteredTransactions.map((transaction: Transaction, index: number) => (
              <div className=" bg-blue-400 w-120 text-sm mt-10 g-10 rounded-lg mb-4  flex justify-around  items-center " key={index}>

                <li key={index} className=" p-4  text-white">
                  <p>Amount: {transaction.amount}</p>
                  <p>Description: {transaction.description}</p>
                  <p>Type: {transaction.type}</p>
                  <p>Category: {transaction.category}</p>
                  <p>Date: {new Date(transaction.date).toLocaleDateString()}</p>
                </li>
                <Link to={`/delete/${index}`} className=" text-2xl text-red-400 hover:bg-blue-500 hover:rounded-md py-1 px-2">delete</Link>
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
