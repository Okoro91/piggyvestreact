import React from "react";
import Hero from "../components/main/Hero";
import Security from "../components/main/Security";
// import Savings from "../components/main/Savings";
import Invest from "../components/main/Invest";
import Featured from "../components/main/Featured";
import Customer from "../components/main/Customer";

const Home = () => {
  return (
    <div className="max-w-315 m-auto p-10">
      <Hero />
      <Security />
      {/* <Savings /> */}
      <Invest />
      <Customer />
      <Featured />
    </div>
  );
};

export default Home;
