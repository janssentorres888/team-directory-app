import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Welcome to the Team Directory
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Meet our team, explore their profiles, and save your favorite members.
      </p>

      <Link to="/users">
        <Button
          label="Explore Team Members"
          variant="primary"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}

export default Home;
