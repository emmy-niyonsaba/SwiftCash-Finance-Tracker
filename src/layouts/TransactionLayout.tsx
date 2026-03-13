import { Outlet } from "react-router-dom";

export default function TransactionLayout() {
  return (
    <div className="min-h-full">
      <Outlet />
    </div>
  );
}
