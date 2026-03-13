import { useRef, useEffect } from "react";
import { Form, Link, useNavigation } from "react-router-dom";

function AddTransaction() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="min-h-full px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">Add Transaction</h1>
            <p className="mt-1 text-sm text-slate-500">Record a new income or expense into SwiftCash.</p>
          </div>
          <Link
            to="/transactions"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Transactions
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <Form method="post" className="space-y-6">
            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-700">
                Description
              </label>
              <textarea
                id="description"
                ref={inputRef}
                name="description"
                placeholder="Example: Grocery shopping at Carrefour"
                required
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="amount" className="mb-2 block text-sm font-semibold text-slate-700">
                  Amount
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input
                    id="amount"
                    type="number"
                    name="amount"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-8 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="mb-2 block text-sm font-semibold text-slate-700">
                  Transaction Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="category" className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="Salary">Salary</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Leisure">Leisure</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/transactions"
                className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-36 items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Saving..." : "Save Transaction"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default AddTransaction;