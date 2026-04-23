import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-8">
        <div>
          <h1 className="text-6xl font-light text-slate-900 mb-4">404</h1>
          <h2 className="text-2xl font-light text-slate-900 mb-2">
            Project Not Found
          </h2>
          <p className="text-slate-600 font-light">
            The project you're looking for doesn't exist or has been removed.
          </p>
        </div>

        <Link
          href="/#projects"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-light transition-colors duration-200"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
