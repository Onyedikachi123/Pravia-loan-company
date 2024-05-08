import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-10 pb-7 pt-3">
      <div className="container mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between py-4 lg:py-0">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Logo" style={{ height: "50px", width: "200px" }} />
            </NavLink>
          </div>

          {/* Menu toggle button for mobile view */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Links and button for larger screens */}
        <div className={`lg:flex lg:items-center lg:w-full lg:justify-between ${isOpen ? "block" : "hidden"}`}>
          {/* Links in the center */}
          <ul className="lg:flex lg:space-x-4 text-center lg:text-left mx-auto font-normal">
            <li className="py-2 lg:py-0">
              <NavLink
                to="/"
                className="text-gray-500"
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 lg:py-0">
              <NavLink
                to="#"
                className="text-gray-500"
              >
                About Us
              </NavLink>
            </li>
            <li className="py-2 lg:py-0">
              <NavLink
                to="#"
                className="text-gray-500"
              >
                Services
              </NavLink>
            </li>
            <li className="py-2 lg:py-0">
              <NavLink
                to="#"
                className="text-gray-500"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* "Get Started" button at the right */}
          <div className="py-2 lg:py-0 lg:self-end">
            <NavLink
              to="/getstarted"
              className="bg-primary text-white px-4 py-2 rounded-md shadow-md"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
