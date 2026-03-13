import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8 py-24">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-black text-slate-800 leading-none mb-2">404</h1>
        <h2 className="text-xl font-semibold text-slate-700 mb-3">Page Not Found</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          Oops! The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Dashboard
          </Link>
          <Link
            to="/transactions"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-lg font-medium text-sm transition-colors shadow-sm"
          >
            Transactions
          </Link>
        </div>
      </div>
    </div>
  );
}
