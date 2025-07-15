import arrow from "../../assets/arrow-turn-down-right-svgrepo-com.svg";
import safelock from "../../assets/securitylock.svg";

const Security = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-5 lg:gap-20 py-10 lg:py-24 w-full px-4 sm:px-6 lg:px-8 font-inter">
      <div className="lock-img flex-shrink-0 mb-8 lg:mb-0">
        <img
          src={safelock}
          alt="Security Lock"
          className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
      </div>

      <div className="content flex flex-col gap-4 text-center lg:text-left">
        <h4 className="text-2xl sm:text-3xl font-bold text-[#122231]">
          Your security is our priority
        </h4>
        <p className="mt-4 max-w-full lg:max-w-2xl text-base sm:text-lg leading-relaxed text-gray-700">
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud.
        </p>

        <div className="more flex items-center justify-center lg:justify-start mt-4">
          <img
            src={arrow}
            alt="Arrow pointing right"
            className="inline-block w-6 h-6 mr-2"
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#122231] italic hover:underline"
          >
            More on our security measures
          </a>
        </div>
      </div>
    </div>
  );
};

export default Security;
