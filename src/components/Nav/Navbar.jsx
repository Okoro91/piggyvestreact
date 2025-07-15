import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import SaveNav from "./SaveNav";
import ResNav from "./ResNav";

const Navbar = () => {
  const [saveOpen, setSaveOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  return (
    <nav className="flex flex-col p-6 pt-15 space-y-6 lg:flex-row lg:p-0 lg:space-y-0 items-center lg:justify-between bg-white z-20">
      <ul className="space-x-6 flex flex-col lg:flex-row items-center font-semibold gap-8 lg:space-x-0 lg:gap-4">
        <li className="relative">
          <NavLink
            to="/save"
            className="text-gray-600 hover:underline text-xl font-medium flex items-center"
            onMouseEnter={() => setSaveOpen(true)}
          >
            Save
            <Icon path={mdiChevronDown} size={1} className="inline" />
          </NavLink>
          {saveOpen && (
            <SaveNav
              onMouseLeave={() => setSaveOpen(false)}
              onClick={() => setSaveOpen(false)}
            />
          )}
        </li>
        <li>
          <NavLink
            to="/invest"
            className="text-gray-600 hover:underline text-xl  font-medium"
          >
            Invest
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stories"
            className="text-gray-600 hover:underline text-xl  font-medium"
          >
            Stories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faqs"
            className="text-gray-600 hover:underline text-xl  font-medium"
          >
            FAQs
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="/resources"
            className="text-gray-600 hover:underline text-xl font-medium flex items-center"
            onMouseEnter={() => setResourcesOpen(true)}
          >
            Resources
            <Icon path={mdiChevronDown} size={1} className="inline" />
          </NavLink>
          {resourcesOpen && (
            <ResNav
              onMouseLeave={() => setResourcesOpen(false)}
              onClick={() => setResourcesOpen(false)}
            />
          )}
        </li>
        <li></li>
      </ul>
      <div className="pt-8 space-y-4 lg:flex lg:pt-0 lg:space-y-0">
        <NavLink to="/signin">
          <button className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors text-lg">
            Sign in
          </button>
        </NavLink>
        <button className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors text-lg">
          Create free account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
