import type { Transaction } from "../types/FinancialTypes";
import { Link, NavLink, useLoaderData, useSearchParams } from "react-router-dom";

function TransactionList() {
  const transactions = useLoaderData() as Transaction[];
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const filteredTransactions = type
    ? transactions.filter((t: Transaction) => t.type === type)
    : transactions;

  const totalIncome = transactions
    .filter((t: Transaction) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t: Transaction) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Transactions</h1>
          <p className="text-slate-500 text-sm mt-1">
            {filteredTransactions.length} record{filteredTransactions.length !== 1 ? "s" : ""} found
          </p>
        </div>
        <Link
          to="/transactions/add"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Transaction
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Net Balance</p>
          <p className={`text-2xl font-bold mt-1 ${totalIncome - totalExpense >= 0 ? "text-slate-800" : "text-red-500"}`}>
            ${(totalIncome - totalExpense).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Income</p>
          <p className="text-2xl font-bold mt-1 text-emerald-500">${totalIncome.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Expenses</p>
          <p className="text-2xl font-bold mt-1 text-red-500">${totalExpense.toLocaleString()}</p>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-slate-500 font-medium mr-1">Filter:</span>
        <NavLink
          to="/transactions"
          end
          className={!type
            ? "bg-slate-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
            : "text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"}
        >
          All
        </NavLink>
        <NavLink
          to="/transactions?type=income"
          className={type === "income"
            ? "bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
            : "text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"}
        >
          Income
        </NavLink>
        <NavLink
          to="/transactions?type=expense"
          className={type === "expense"
            ? "bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
            : "text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"}
        >
          Expense
        </NavLink>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {filteredTransactions.length > 0 ? (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Description</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Category</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Type</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Amount</th>
                <th className="text-center px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTransactions.map((transaction: Transaction, index: number) => (
                <tr key={transaction.id || index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-slate-500 text-sm">
                    {new Date(transaction.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </td>
                  <td className="px-6 py-4 text-slate-800 font-medium max-w-50 truncate">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full text-xs font-medium">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      transaction.type === "income"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-red-50 text-red-600"
                    }`}>
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${
                    transaction.type === "income" ? "text-emerald-500" : "text-red-500"
                  }`}>
                    {transaction.type === "income" ? "+" : "-"}${transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        to={`/transactions/view/${index}`}
                        className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                      >
                        View
                      </Link>
                      <Link
                        to={`/transactions/delete/${index}`}
                        className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="font-medium text-slate-500 mb-1">No transactions found</p>
            <p className="text-sm text-slate-400">Start by adding your first transaction</p>
            <Link
              to="/transactions/add"
              className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
            >
              Add Transaction
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionList;
