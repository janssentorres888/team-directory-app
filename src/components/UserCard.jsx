
import { Link } from "react-router-dom";
import Button from "./Button";

function UserCard({
  id,
  name,
  email,
  company,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {name}
      </h2>

      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>

      <p className="text-gray-600 mb-4">
        <strong>Company:</strong> {company}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          label={isFavorite ? "Remove Favorite" : "Add Favorite"}
          variant={isFavorite ? "danger" : "primary"}
          onClick={() => onToggleFavorite(id)}
        />

        <Link
          to={`/users/${id}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
