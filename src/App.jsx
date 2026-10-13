import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function toggleFavorite(userId) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((id) => id !== userId)
        : [...currentFavorites, userId]
    );
  }

  function toggleDarkMode() {
    setDarkMode((currentMode) => !currentMode);
  }

  return (
    <BrowserRouter>
      <div className={darkMode ? "min-h-screen bg-gray-950 text-white" : "min-h-screen bg-gray-50 text-gray-900"}>
        <Navbar
          favoritesCount={favorites.length}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={
              <Users
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;