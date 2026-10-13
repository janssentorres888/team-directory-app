import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({ favoritesCount, darkMode, onToggleDarkMode }) {
  const linkStyle = ({ isActive }) =>
    `transition hover:underline ${
      isActive
        ? "font-bold underline text-yellow-300"
        : "text-white"
    }`;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-xl font-bold">Team Directory</h1>

        <div className="flex flex-wrap items-center gap-5">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/users" className={linkStyle}>
            Users
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <span className="font-semibold">
            Favorites: {favoritesCount}
          </span>

          <Button
            label={darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            variant="primary"
            onClick={onToggleDarkMode}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;