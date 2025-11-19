'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Oops! Something went wrong</h1>
        <p className="text-lg text-slate-600 mb-8">
          We're sorry, but there seems to be an issue with the page you're looking for.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-slate-600 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}