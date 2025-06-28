import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <nav className="space-x-6 flex items-center font-semibold">
        <div className="text-2xl font-bold text-gray-900 flex items-center">
          <img src="./logo.svg" alt="logo" />
        </div>
        <Link to="/save" className="text-gray-600 hover:underline">
          Save <Icon path={mdiChevronDown} size={1} className="inline" />
        </Link>
        <Link to="/invest" className="text-gray-600 hover:underline">
          Invest <Icon path={mdiChevronDown} size={1} className="inline" />
        </Link>
        <Link to="/stories" className="text-gray-600 hover:underline">
          Stories <Icon path={mdiChevronDown} size={1} className="inline" />
        </Link>
        <Link to="/faqs" className="text-gray-600 hover:underline">
          FAQs <Icon path={mdiChevronDown} size={1} className="inline" />
        </Link>
        <Link to="/resources" className="text-gray-600 hover:underline">
          Resources <Icon path={mdiChevronDown} size={1} className="inline" />
        </Link>
      </nav>
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:underline">Sign in</button>
        <button className="bg-gray-900 text-white px-4 py-2 rounded">
          Create free account
        </button>
      </div>
    </header>
  );
};

export default Header;
