import { Link } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex  justify-between w-full lg:justify-start">
      <div className="flex items-center mr-5 justify-between ">
        <Link to="/home">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:block w-full">
        <Navbar />
      </div>
      <div className="relative">
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
