import { Link } from "react-router-dom";
import type { Transaction } from "../types/FinancialTypes";

function Dashboard() {
  const transactions: Transaction[] = JSON.parse(localStorage.getItem("transactions") || "[]");
  const totalIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpense;
  const recentTransactions = [...transactions].reverse().slice(0, 5);

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Welcome back to SwiftCash</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        {/* Balance */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Net Balance</p>
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
          <p className={`text-3xl font-bold ${balance >= 0 ? "text-slate-800" : "text-red-500"}`}>
            ${balance.toLocaleString()}
          </p>
          <p className="text-xs text-slate-400 mt-1">{transactions.length} total transactions</p>
        </div>

        {/* Income */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Income</p>
            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-emerald-500">${totalIncome.toLocaleString()}</p>
          <p className="text-xs text-slate-400 mt-1">
            {transactions.filter((t) => t.type === "income").length} income entries
          </p>
        </div>

        {/* Expenses */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Expenses</p>
            <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-red-500">${totalExpense.toLocaleString()}</p>
          <p className="text-xs text-slate-400 mt-1">
            {transactions.filter((t) => t.type === "expense").length} expense entries
          </p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Recent Transactions</h2>
          <Link to="/transactions" className="text-xs text-emerald-500 hover:text-emerald-600 font-medium transition-colors">
            View all →
          </Link>
        </div>
        {recentTransactions.length > 0 ? (
          <table className="w-full text-sm">
            <tbody className="divide-y divide-slate-50">
              {recentTransactions.map((t, i) => (
                <tr key={t.id || i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.type === "income" ? "bg-emerald-50" : "bg-red-50"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${t.type === "income" ? "text-emerald-500" : "text-red-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {t.type === "income"
                          ? <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          : <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />}
                      </svg>
                    </div>
                  </td>
                  <td className="py-3.5 pr-6">
                    <p className="font-medium text-slate-800">{t.description}</p>
                    <p className="text-xs text-slate-400">{t.category}</p>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <p className={`font-bold ${t.type === "income" ? "text-emerald-500" : "text-red-500"}`}>
                      {t.type === "income" ? "+" : "-"}${t.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-400">{new Date(t.date).toLocaleDateString()}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-slate-400">
            <p className="font-medium text-slate-500">No transactions yet</p>
            <Link
              to="/transactions/add"
              className="mt-3 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
            >
              Add your first transaction
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

