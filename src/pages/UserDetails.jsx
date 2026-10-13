import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import usersData from "../data/users";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const foundUser = usersData.find(
        (item) => item.id === Number(id)
      );

      setUser(foundUser || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (loading) {
      document.title = "Loading User...";
    } else if (user) {
      document.title = user.name;
    } else {
      document.title = "User Not Found";
    }

    return () => {
      document.title = "Team Directory";
    };
  }, [user, loading]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <ErrorMessage message="User not found." />
        <div className="text-center">
          <Link
            to="/users"
            className="text-blue-600 font-semibold hover:underline"
          >
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          User Details
        </h1>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Company:</strong> {user.company}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>

        <Link
          to="/users"
          className="inline-block mt-8 text-blue-600 font-semibold hover:underline"
        >
          ← Back to Users
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;