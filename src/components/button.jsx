import React from "react";

const button = ({ icon: Icon, label, bgColor = "bg-black", href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 px-4 py-2 rounded-md text-white ${bgColor} hover:opacity-90 transition-all`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
};

export default button;
