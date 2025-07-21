import google from "../../assets/google-icon.svg";

const Android = () => {
  return (
    <>
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
    </>
  );
};

export default Android;
