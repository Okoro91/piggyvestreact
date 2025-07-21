import apple from "../../assets/whiteAppleLogo.svg";

const Apple = () => {
  return (
    <>
      <a
        target="_blank"
        href="https://apps.apple.com/ng/app/piggyvest/id1263117994"
        className="flex justify-center items-center px-4 py-4 rounded-xl font-semibold whitespace-nowrap h-[53px] text-white bg-[#122231] hover:bg-gray-800 transition-colors w-full sm:w-auto"
      >
        <img
          src={apple}
          alt="download-apple"
          className="w-[18px] h-[22px] mr-1"
        />{" "}
        Get on iPhone
      </a>
    </>
  );
};

export default Apple;
