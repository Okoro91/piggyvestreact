import Hero from "../components/main/Hero";
import Security from "../components/main/Security";
import Savings from "../components/main/Savings";
import Invest from "../components/main/Invest";
import Customers from "../components/main/Customers";
import Featured from "../components/main/Featured";

const Home = () => {
  return (
    <div className="max-w-315 m-auto p-10">
      <Hero />
      <Security />
      <Savings />
      <Invest />
      <Customers />
      <Featured />
    </div>
  );
};

export default Home;
