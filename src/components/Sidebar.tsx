import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="flex flex-col text-2xl gap-6 p-8 h-screen w-64 bg-blue-500 text-white">
      <NavLink to="/" className={({ isActive }) => (isActive ? "text-2xl font-bold" : "text-gray-700 cursor-pointer")}>
        Dashboard
      </NavLink>
      <NavLink end to="/transactions" className={({ isActive }) => (isActive ? "text-2xl font-bold" : "text-gray-700 cursor-pointer")}>
        Ledger
      </NavLink>
      <NavLink to="/transactions/add" className={({ isActive }) => (isActive ? "text-2xl font-bold  " : "text-gray-700 cursor-pointer ")}>
        Add Transaction
      </NavLink>
    </nav>
  );
}
