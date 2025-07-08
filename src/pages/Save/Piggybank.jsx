import React, { useState } from "react";

const PiggyBank = () => {
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const handleAutoSaveToggle = () => {
    setAutoSaveEnabled(!autoSaveEnabled);
  };

  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col lg:flex-row items-center justify-center p-4 font-inter">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left p-6 lg:p-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Piggybank</h1>
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <span className="text-lg">Automated savings</span>
        </div>
        <p className="text-lg mb-8 max-w-md">
          Strict daily, weekly or monthly automatic savings. Earn up to{" "}
          <span className="font-bold">18% p.a.</span>
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C9.75 0 8.04 1.83 8.04 4.08c0 2.25 1.71 4.08 3.96 4.08s3.96-1.83 3.96-4.08c0-2.25-1.71-4.08-3.96-4.08zm8.16 8.16c-.03 2.82-2.31 5.1-5.13 5.1-1.05 0-2.01-.3-2.82-.81-.96.69-2.22 1.11-3.6 1.11-3.39 0-6.15-2.76-6.15-6.15 0-.9.21-1.74.57-2.52C2.16 6.3 0 9.09 0 12.3c0 4.86 3.96 8.82 8.82 8.82 1.8 0 3.51-.54 4.98-1.44 1.38.9 3.09 1.44 4.98 1.44 3.96 0 7.2-3.24 7.2-7.2 0-3.18-2.07-5.91-4.92-6.84z" />
            </svg>
            <span>Get on iPhone</span>
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4V8h-4v2zm0 4h4v-2h-4v2zm-2 2h8v-2H8v2zm-2-6h12v-2H6v2z" />
            </svg>
            <span>Get on Android</span>
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center p-6 mt-12 lg:mt-0">
        <div className="relative w-80 h-[550px] bg-black rounded-[3rem] shadow-2xl flex items-center justify-center p-2">
          <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10"></div>
            <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
              <button className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h2 className="text-lg font-semibold text-gray-800">Piggybank</h2>
              <div className="w-6"></div>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
              <div className="bg-blue-700 text-white rounded-2xl p-6 mb-6 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-800 rounded-full opacity-20 -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full opacity-20 -mb-16 -ml-16"></div>
                <div className="absolute top-4 right-4 text-xs bg-blue-500 px-3 py-1 rounded-full">
                  18% per annum
                </div>

                <p className="text-sm opacity-80 mb-1 mt-6">
                  PiggyBank Balance
                </p>
                <p className="text-3xl font-bold mb-6">₦3,400,576</p>

                <div className="flex justify-between items-center text-sm border-t border-blue-600 pt-4">
                  <div>
                    <p className="opacity-80">AutoSave</p>
                    <p className="font-semibold">
                      ₦3,000 <span className="opacity-70">daily</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="opacity-80">Next Withdrawal Day</p>
                    <p className="font-semibold">30th of June, 2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-md mb-6">
                <div>
                  <h3 className="text-gray-800 font-semibold text-lg">
                    Enable AutoSave
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Save automatically daily, weekly or monthly with AutoSave.
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={autoSaveEnabled}
                    onChange={handleAutoSaveToggle}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="bg-white border-t border-gray-200 grid grid-cols-5 gap-2 p-4 text-gray-500">
              <div className="flex flex-col items-center justify-center text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-xs mt-1">Quick Save</span>
              </div>

              <div className="flex flex-col items-center justify-center hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m14-4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
                  />
                </svg>
                <span className="text-xs mt-1">Interest</span>
              </div>

              <div className="flex flex-col items-center justify-center hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="text-xs mt-1">Withdraw</span>
              </div>

              <div className="flex flex-col items-center justify-center hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.827 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.827 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.827-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.827-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-xs mt-1">Settings</span>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://placehold.co/80x80/FFD700/000000?text=Coin"
          alt="Coin"
          className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full opacity-80 hidden lg:block"
        />
        <img
          src="https://placehold.co/60x60/FFD700/000000?text=Coin"
          alt="Coin"
          className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full opacity-80 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default PiggyBank;
