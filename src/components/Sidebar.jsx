import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Navbar from "./Nav/Navbar";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        {isMenuOpen ? (
          <X size={28} className="text-gray-700" />
        ) : (
          <Menu size={28} className="text-gray-700" />
        )}
      </button>
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-white-500 z-10 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden absolute top-18`}
      >
        <Navbar />
      </div>
    </>
  );
};

export default Sidebar;
