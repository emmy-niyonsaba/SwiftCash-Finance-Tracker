import { useParams, Link } from "react-router-dom";
import type { Transaction } from "../types/FinancialTypes";

export default function ViewTransaction() {
    const { transactionId } = useParams();
    const transactions: Transaction[] = JSON.parse(localStorage.getItem("transactions") || "[]");
    const index = parseInt(transactionId ?? "-1");
    const transaction = transactions[index];

    if (!transaction) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 min-h-[60vh]">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-lg font-bold text-slate-800">Transaction not found</h2>
                <p className="text-sm text-slate-500 mt-1">This transaction may have been deleted.</p>
                <Link to="/transactions" className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                    Back to Transactions
                </Link>
            </div>
        );
    }

    const fields = [
        { label: "Description", value: transaction.description },
        { label: "Amount", value: `$${transaction.amount.toLocaleString()}` },
        { label: "Type", value: transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1) },
        { label: "Category", value: transaction.category },
        { label: "Date", value: new Date(transaction.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) },
        { label: "Transaction ID", value: transaction.id },
    ];

    return (
        <div className="p-8 max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Transaction Details</h1>
                    <p className="text-slate-500 text-sm mt-1">Full overview of this entry</p>
                </div>
                <Link
                    to="/transactions"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-800 hover:scale-y-[1.1] hover:scale-x-[1.1] hover:bg-green-300"
                >
                    Back
                </Link>
            </div>

            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${transaction.type === "income" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {transaction.type === "income"
                        ? <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />}
                </svg>
                {transaction.type === "income" ? "Income" : "Expense"} — ${transaction.amount.toLocaleString()}
            </div>

            {/* Detail Rows */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y divide-slate-50 mb-6">
                {fields.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between px-6 py-4">
                        <span className="text-sm text-slate-500 font-medium">{label}</span>
                        <span className={`text-sm font-semibold text-right max-w-[60%] truncate ${label === "Type" && transaction.type === "income"
                                ? "text-emerald-500"
                                : label === "Type"
                                    ? "text-red-500"
                                    : "text-slate-800"
                            }`}>
                            {value}
                        </span>
                    </div>
                ))}
            </div>

            {/* Action */}
            <Link
                to={`/transactions/delete/${transactionId}`}
                className="inline-flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete Transaction
            </Link>
        </div>
    );
}
