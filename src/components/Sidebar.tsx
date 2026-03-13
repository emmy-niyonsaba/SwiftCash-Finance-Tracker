import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItem = (to: string, end: boolean, icon: React.ReactNode, label: string) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-emerald-500 text-white shadow-md"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );

  return (
    <aside className="flex flex-col h-screen w-64 bg-slate-900 text-white shadow-2xl shrink-0">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-700/60">
        <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h1 className="text-base font-bold text-white leading-none tracking-wide">SwiftCash</h1>
          <p className="text-xs text-slate-400 mt-0.5">Finance Tracker</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-3 py-5 flex-1">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-2">Menu</p>

        {navItem("/", true,
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>,
          "Dashboard"
        )}

        {navItem("/transactions", false,
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>,
          "Transactions"
        )}

        {navItem("/transactions/add", false,
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>,
          "Add Transaction"
        )}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-700/60">
        <p className="text-xs text-slate-500 text-center">© 2026 SwiftCash</p>
      </div>
    </aside>
  );
}
