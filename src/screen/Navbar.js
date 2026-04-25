import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-white opacity-10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-white text-xl font-bold">Rci Group Admin</div>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200 transition">
              Home
            </Link>
            <Link
              to="/batch-management"
              className="text-white hover:text-gray-200 transition"
            >
              Batch Mangement
            </Link>
            <Link
              to="/course-management"
              className="text-white hover:text-gray-200 transition"
            >
              Course Managment
            </Link>
            <Link
              to="/admission-form"
              className="text-white hover:text-gray-200 transition"
            >
              Admission Form
            </Link>
            <Link
              to="/fee-management"
              className="text-white hover:text-gray-200 transition"
            >
              Fee Managemnet
            </Link>
            <Link
              to="/student-query"
              className="text-white hover:text-gray-200 transition"
            >
              Student Query
            </Link>
            <Link
              to="/exam-management"
              className="text-white hover:text-gray-200 transition"
            >
              Exam Management
            </Link>
            <Link
              to="/staff-management"
              className="text-white hover:text-gray-200 transition"
            >
              Staff Management
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              to="/"
              className="bg-white text-blue-600 px-4 py-1.5 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Logout
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              ☰
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          <Link to="/" className="block text-white">
            Home
          </Link>
          <Link to="/dashboard" className="block text-white">
            Dashboard
          </Link>
          <Link to="/students" className="block text-white">
            Students
          </Link>
          <Link to="/settings" className="block text-white">
            Settings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
