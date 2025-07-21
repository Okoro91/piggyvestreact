import Android from "../components/button/Android";
import Apple from "../components/button/Apple";
import investpage from "../assets/investpage.png";

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
        <div className="download-apps flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
          <Apple />
          <Android />
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center p-6 mt-12 lg:mt-0">
        <img src={investpage} alt="invest page image" />
      </div>
    </div>
  );
};

export default Invest;
