// src/components/SomethingWentWrong.jsx
import { Link } from 'react-router';

const SomethingWentWrong = ({ errorCode = 500, message = "Something went wrong" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-red-500 p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{errorCode}</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{message}</h2>
          <p className="text-gray-600 mb-6">
            We're sorry, but something unexpected happened. Please try again later or contact support if the problem persists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Go to Homepage
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
