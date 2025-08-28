import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch the user's name from localStorage (assuming it's stored in user metadata or any other place)
  const user = JSON.parse(localStorage.getItem("Huzaifa Ejaz"));
  const userName = user ? user.full_name : "Huzaifa Ejaz"; // Default to "User" if no user info is found

  // Get the first two letters of the user's name
  const nameInitials = userName.slice(0, 2).toUpperCase();

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user"); // Remove user data as well
    navigate("/"); // Redirect to home page
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 border-b">
      <h1 className="text-lg font-semibold text-gray-800">HH TECH Dashboard</h1>
      <div className="relative">
        {/* User initials or name avatar */}
        <div
          onClick={toggleDropdown}
          className="w-10 h-10 bg-orange-700 text-white rounded-full flex items-center justify-center font-semibold cursor-pointer"
        >
          {nameInitials}
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md border border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopNavbar;
