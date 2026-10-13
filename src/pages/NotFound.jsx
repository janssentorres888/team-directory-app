
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center px-6 py-16">
      <h1 className="text-5xl font-bold text-red-500 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="text-blue-600 font-semibold hover:underline"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
