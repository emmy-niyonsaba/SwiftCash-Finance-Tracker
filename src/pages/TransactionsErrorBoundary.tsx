import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function TransactionsErrorBoundary() {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : "Unable to load transactions.";

  return (
    <div className="p-8">
      <div className="mx-auto max-w-xl rounded-xl border border-red-100 bg-red-50 p-6 text-red-700">
        <h2 className="text-lg font-bold">Transactions could not be loaded</h2>
        <p className="mt-2 text-sm">{message}</p>
        <Link
          to="/transactions"
          className="mt-4 inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
