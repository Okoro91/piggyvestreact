import React, { useState } from "react";
import { Shield } from "lucide-react";
import Apple from "../../components/button/Apple";
import Android from "../../components/button/Android";
import piggypage from "../../assets/piggybankpage.png";

const PiggyBank = () => {
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const handleAutoSaveToggle = () => {
    setAutoSaveEnabled(!autoSaveEnabled);
  };

  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col lg:flex-row items-center justify-center p-4 font-inter">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left p-6 lg:p-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Piggybank</h1>
        <div className="flex items-center space-x-2 mb-6 rounded-full bg-blue-100 p-3">
          <div className="flex-shrink-0  text-blue-500">
            <Shield size={24} strokeWidth={1.5} />
          </div>
          <span className="text-lg text-blue-500">Automated savings</span>
        </div>
        <p className="text-lg mb-8 max-w-md">
          Strict daily, weekly or monthly automatic savings. Earn up to{" "}
          <span className="font-bold">18% p.a.</span>
        </p>
        <div className="download-apps flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
          <Apple />
          <Android />
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center p-6 mt-12 lg:mt-0">
        <img src={piggypage} alt="piggybank" />
      </div>
    </div>
  );
};

export default PiggyBank;
