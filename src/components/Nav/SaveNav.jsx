import React from "react";
import { NavLink } from "react-router-dom";
import { Shield, Lock, Target, Wallet, DollarSign, Home } from "lucide-react";

const SaveNav = (props) => {
  return (
    <>
      <ul
        className="absolute -left-55 lg:left-0  shadow-lg  z-10 bg-white rounded-xl  ring-1 ring-black ring-opacity-5 p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-150 mt-2"
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
      >
        <li>
          <NavLink
            to="/save/piggybank"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-200"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-500">
              <Shield size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Piggybank
              </p>
              <p className="text-sm text-gray-500">Automated Savings</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/save/safelock"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-200"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-500">
              <Lock size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Safelock
              </p>
              <p className="text-sm text-gray-500">Fixed Savings</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/save/target-savings"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-200"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-green-100 text-green-500">
              <Target size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Target Savings
              </p>
              <p className="text-sm text-gray-500">Goal-oriented Savings</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/save/flexnaira"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-200"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-pink-100 text-pink-500">
              <Wallet size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                FlexNaira
              </p>
              <p className="text-sm text-gray-500">Flexible Savings</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/save/piggybank"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-200"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-gray-100 text-gray-500">
              <DollarSign size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                Flex Dollar
              </p>
              <p className="text-sm text-gray-500">Dollar Savings</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/save/piggybank"
            className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-200"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-orange-100 text-orange-500">
              <Home size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-medium hover:text-orange-600 text-gray-900">
                House Money
              </p>
              <p className="text-sm text-gray-500">Semi Strict Wallet</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SaveNav;
