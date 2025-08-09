// Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("👋 You have been logged out successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to eKart! 🛒
            </h1>
            <p className="text-gray-600 mt-2">
              Hello {user.email || "User"}, you're successfully logged in!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
          >
            Logout
          </button>
        </div>

        {/* Example Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">📦 My Orders</h3>
            <p className="text-gray-600">
              View your recent orders and track deliveries
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">🛍️ Browse Products</h3>
            <p className="text-gray-600">
              Discover amazing products at great prices
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">👤 My Profile</h3>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
