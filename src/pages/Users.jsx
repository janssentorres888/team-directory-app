import { useState, useEffect } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!loading) {
      document.title = `Users (${filteredUsers.length})`;
    }

    return () => {
      document.title = "Team Directory";
    };
  }, [filteredUsers.length, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Team Members
      </h1>

      <input
        type="text"
        placeholder="Search users by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="w-full md:w-96 px-4 py-3 mb-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;