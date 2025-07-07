import React from "react";

const App = () => {
  return (
    <div className="w-full py-24 lg:py-48 bg-white font-inter px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-3 mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122231]">
          Diverse ways to Invest
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Grow your money and invest for your future confidently.
        </p>
      </div>

      <div
        className="bg-[#7913e5] rounded-3xl w-full max-w-5xl h-auto lg:h-[500px] p-8 sm:p-10 mx-auto relative overflow-hidden
                  flex flex-col lg:flex-row justify-between items-center lg:items-start"
      >
        <div className="card-text flex flex-col justify-between text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <div className="text">
            <h1 className="text-3xl sm:text-4xl font-bold text-white max-w-lg mb-4 mx-auto lg:mx-0">
              Earn Up to 35% returns
            </h1>
            <p className="text-base sm:text-xl font-normal leading-relaxed mt-4 text-[#fed6f1] max-w-md mx-auto lg:mx-0">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </p>
          </div>
          <div className="card-link mt-8 lg:mt-16">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg font-medium hover:underline"
            >
              Learn about Investments
            </a>
          </div>
        </div>

        <div className="invest-card-img w-full lg:w-[450px] relative lg:absolute lg:right-[5%] lg:top-[15%]">
          <img
            src="https://placehold.co/450x300/E0E0E0/000000?text=Investment+Image"
            alt="Investment illustration"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
