const Invest = () => {
  return (
    <div className="min-h-screen bg-purple-700 text-white flex flex-col lg:flex-row items-center justify-center p-4 font-inter">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left p-6 lg:p-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Invest on the go
        </h1>
        <div className="bg-purple-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Up to 35% returns
        </div>
        <p className="text-lg mb-8 max-w-md">
          Invest securely and confidently on the go.
          <br />
          Up to 35% returns, 6-12 month duration.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-purple-700 px-6 py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
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

          <button className="bg-white text-purple-700 px-6 py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
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
              <h2 className="text-lg font-semibold text-gray-800">
                My Investments
              </h2>
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
              <div className="bg-purple-800 text-white rounded-2xl p-6 mb-6 relative overflow-hidden shadow-lg">
                <div className="absolute top-4 right-4 text-xs bg-purple-600 px-3 py-1 rounded-full">
                  Up to 35% returns
                </div>
                <p className="text-sm opacity-80 mb-1 mt-6">Total Investment</p>
                <p className="text-3xl font-bold mb-6">₦15,800,000</p>

                <div className="absolute bottom-0 right-0 w-32 h-16 bg-purple-900 opacity-30 rounded-tl-full -mb-4 -mr-4"></div>
                <div className="absolute bottom-0 right-0 w-24 h-12 bg-purple-900 opacity-50 rounded-tl-full -mb-2 -mr-2"></div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-800 font-semibold text-lg">
                  Vetted Opportunities
                </h3>
                <a
                  href="#"
                  className="text-purple-700 text-sm font-semibold flex items-center"
                >
                  Find More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex overflow-x-auto space-x-4 pb-4">
                <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="relative">
                    <img
                      src="https://placehold.co/256x144/E0E0E0/000000?text=Investment+1"
                      alt="Investment Opportunity 1"
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      Sold Out
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Corporate Debt Note V
                    </h4>
                    <p className="text-gray-500 text-sm">
                      13% • returns in 9 months
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="relative">
                    <img
                      src="https://placehold.co/256x144/D0D0D0/000000?text=Investment+2"
                      alt="Investment Opportunity 2"
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      Sold Out
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Corporate Debt Note IV
                    </h4>
                    <p className="text-gray-500 text-sm">
                      6.9% • returns in 6 months
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="relative">
                    <img
                      src="https://placehold.co/256x144/C0C0C0/000000?text=Investment+3"
                      alt="Investment Opportunity 3"
                      className="w-full h-36 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Real Estate Fund I
                    </h4>
                    <p className="text-gray-500 text-sm">
                      15% • returns in 12 months
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-t border-gray-200 grid grid-cols-4 gap-2 p-4 text-gray-500">
              <div className="flex flex-col items-center justify-center text-purple-700">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-xs mt-1">Home</span>
              </div>

              <div className="flex flex-col items-center justify-center hover:text-purple-700">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="text-xs mt-1">Investments</span>
              </div>

              <div className="flex flex-col items-center justify-center hover:text-purple-700">
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
                <span className="text-xs mt-1">Wallet</span>
              </div>

              <div className="flex flex-col items-center justify-center hover:text-purple-700">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-xs mt-1">Profile</span>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://placehold.co/100x200/5A2D87/FFFFFF?text=Bars"
          alt="Decorative Bars"
          className="absolute bottom-0 right-0 w-24 h-48 opacity-70 hidden lg:block"
          style={{ transform: "rotate(180deg)" }}
        />
        <img
          src="https://placehold.co/80x160/5A2D87/FFFFFF?text=Bars"
          alt="Decorative Bars"
          className="absolute bottom-0 right-16 w-20 h-40 opacity-50 hidden lg:block"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
    </div>
  );
};

export default Invest;
