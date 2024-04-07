import React from 'react'
import { Link } from 'react-router-dom';
function Top() {
  return (
    <section className="bg-blue-500 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <Link to="/">
            <span className="sr-only">HealthCare</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="/img/logo.png" // Replace with your logo image path
              alt="HealthCare Logo"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link to="/services" className="text-base font-medium text-white hover:text-gray-300">
            Services
          </Link>
          <Link to="/doctors" className="text-base font-medium text-white hover:text-gray-300">
            Doctors
          </Link>
          <Link to="/about" className="text-base font-medium text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="text-base font-medium text-white hover:text-gray-300">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Top







