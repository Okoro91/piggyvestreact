import apple from "../../assets/apple-icon.svg";
import google from "../../assets/google-icon.svg";
import customer from "../../assets/customerImg.png";

const Customers = () => {
  return (
    <div className="font-inter">
      <div className="flex flex-col justify-center items-center py-10 lg:py-20 w-full px-4 sm:px-6 lg:px-8 bg-white">
        <div className="video-text w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 text-gray-900">
            Meet Our Saver of the Month
          </h1>
          <p className="text-base sm:text-lg font-normal max-w-3xl leading-relaxed mt-6 mb-8 text-gray-700">
            Every month, we shine a spotlight on one saver, asking them about
            their savings culture and how Piggyvest has helped them.
          </p>
        </div>

        <div className="youtube w-full flex justify-center items-center mt-8">
          <iframe
            src="https://www.youtube.com/embed/2EnGMGxKuII?autoplay=1&mute=1"
            title="Saver of the Month Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-3xl h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl border-none shadow-lg"
          ></iframe>
        </div>
      </div>

      <div className="customers w-full py-20 lg:py-36 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-10 lg:gap-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="customers-img w-full lg:w-[550px] flex-shrink-0">
          <img
            src={customer}
            alt="Customers using Piggyvest"
            className="w-full h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        <div className="customers-text w-full lg:w-[560px] text-center lg:text-left">
          <h4 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Join 5+ million people who save and invest with us
          </h4>
          <div className="get-apps flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
            <a
              target="_blank"
              href="https://apps.apple.com/ng/app/piggyvest/id1263117994"
              rel="noopener noreferrer"
              className="flex justify-center items-center px-6 py-3 border border-gray-300 rounded-xl font-medium whitespace-nowrap h-[53px] text-base text-[#122231] bg-white hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              <img
                src={apple}
                alt="Download on Apple App Store"
                className="w-[18px] h-[22px] mr-2"
              />{" "}
              Get on iPhone
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.piggybankng.piggy"
              rel="noopener noreferrer"
              className="flex justify-center items-center px-6 py-3 border border-gray-300 rounded-xl font-medium whitespace-nowrap h-[53px] text-base text-[#122231] bg-white hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              <img
                src={google}
                alt="Get on Google Play"
                className="w-[18px] h-[22px] mr-2"
              />{" "}
              Get on Android
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
