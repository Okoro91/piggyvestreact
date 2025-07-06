import React from "react";
import { NavLink } from "react-router-dom";
import {
  Book,
  FileText,
  BookOpen,
  Calculator,
  Newspaper,
  BookMarked,
} from "lucide-react";

const ResNav = () => {
  return (
    <>
      <ul className="absolute -left-50 w-150 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <li>
          <NavLink
            to="/resources/blog"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-500">
              <Book size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Blog
              </p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources/reports"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-pink-100 text-pink-500">
              <FileText size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Reports
              </p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources/comics"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-green-100 text-green-500">
              <BookOpen size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Comics
              </p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources/calculator"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-green-100 text-green-500">
              <Calculator size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Calculator
              </p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources/newsletter"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-gray-100 text-gray-500">
              <Newspaper size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Newsletter
              </p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources/ebook"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-500">
              <BookMarked size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Ebook
              </p>
            </div>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default ResNav;
