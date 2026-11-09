import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3
          bg-indigo-600 text-white font-semibold rounded-lg
          hover:bg-indigo-700 transition duration-300"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
