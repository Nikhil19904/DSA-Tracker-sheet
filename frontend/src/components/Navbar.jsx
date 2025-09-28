import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token or user session
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        DSA Sheet Tracker
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        <Link to="/dashboard" className="hover:text-blue-500">
          Dashboard
        </Link>
        <Link to="/sheets" className="hover:text-blue-500">
          Sheets
        </Link>
        <Link to="/analytics" className="hover:text-blue-500">
          Analytics
        </Link>
        <Link to="/profile" className="hover:text-blue-500">
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}