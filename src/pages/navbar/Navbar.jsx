import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-10 bg-white/80 backdrop-blur-md shadow-md w-full sticky top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">
              <img src="sd" alt="this is logo img" />
            </h3>
          </a>
        </div>

        <div className="lg:flex hidden gap-x-[44px]">
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Home
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Themes
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Developers
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Pricing
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Blog
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            About Us
          </a>
        </div>

        {/* <div className="flex items-center space-x-5">
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Register
          </a>
          <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
            Login
          </a>
        </div> */}

        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-600 hover:text-blue-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 7H20V5H4V7ZM4 11H20V9H4V11ZM4 15H20V13H4V15ZM4 19H20V17H4V19Z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-start py-2 px-10 space-y-2">
            <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Home
            </a>
            <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Themes
            </a>
            <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Developers
            </a>
            <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Pricing
            </a>
            <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Blog
            </a>
            <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              About Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
