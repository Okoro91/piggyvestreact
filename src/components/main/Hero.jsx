import React from "react";
import homeImg from "../../assets/home-img.avif";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import card4 from "../../assets/card-4.png";
import card5 from "../../assets/card-5.png";
import card6 from "../../assets/card-6.png";
import apple from "../../assets/apple-icon.svg";
import google from "../../assets/google-icon.svg";
import appleWhite from "../../assets/whiteAppleLogo.svg";
import safe from "../../assets/safelock.svg";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full min-h-screen pt-24 pb-10 lg:pt-48 px-4 sm:px-6 lg:px-8 font-inter overflow-hidden">
      <style>
        {`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        `}
      </style>

      <div className=" max-w-full lg:max-w-[40%] text-center lg:text-left mb-12 lg:mb-0">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium no-underline mb-8 hover:bg-blue-700 transition-colors"
        >
          <img src={safe} alt="safe lock" className="mr-2" />
          The 2024 PiggyVest Savings Report
        </a>

        <div className="hero-text-header">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a2a44] leading-tight mb-5">
            The Better Way to Save &amp; Invest
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-700">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
        </div>

        <div className="download-apps flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
          <a
            target="_blank"
            href="https://apps.apple.com/ng/app/piggyvest/id1263117994"
            className="flex justify-center items-center px-4 py-4 rounded-xl font-semibold whitespace-nowrap h-[53px] text-white bg-[#122231] hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            <img
              src={appleWhite}
              alt="download-apple"
              className="w-[18px] h-[22px] mr-1"
            />{" "}
            Get on iPhone
          </a>

          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.piggybankng.piggy"
            className="flex justify-center items-center px-4 py-4 rounded-xl font-semibold whitespace-nowrap h-[53px] text-white bg-[#122231] hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            <img
              src={google}
              alt="download-google"
              className="w-[18px] h-[22px] mr-1"
            />
            Get on Android
          </a>
        </div>
      </div>

      <div className="hero-img relative w-full lg:w-[500px] mt-12 lg:mt-0 shadow-xl rounded-xl  animate-float">
        <img
          src={homeImg}
          alt="main home page image"
          className="w-full rounded-xl"
        />

        <div className="hero-cards">
          <img
            src={card1}
            alt="piggyvest card"
            className="absolute top-[10%] left-[-15%] w-[200px] shadow-md rounded-lg z-20"
          />
          <img
            src={card3}
            alt="piggyvest card"
            className="absolute top-[40%] left-[-15%] w-[200px] shadow-md rounded-lg z-20"
          />
          <img
            src={card5}
            alt="piggyvest card"
            className="absolute bottom-[5%] left-[-15%] w-[180px] shadow-md rounded-lg z-20"
          />

          <img
            src={card2}
            alt="piggyvest card"
            className="absolute top-[5%] right-[-10%] w-[200px] shadow-md rounded-lg z-20"
          />
          <img
            src={card4}
            alt="piggyvest card"
            className="absolute top-[40%] right-[-10%] w-[180px] shadow-md rounded-lg z-20"
          />
          <img
            src={card6}
            alt="piggyvest card"
            className="absolute bottom-[5%] right-[-10%] w-[200px] shadow-md rounded-lg z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
