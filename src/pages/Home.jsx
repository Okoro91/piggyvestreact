import Hero from "../components/main/Hero";
import Security from "../components/main/Security";
import Savings from "../components/main/savings";
const Home = () => {
  return (
    <div className="max-w-315 m-auto p-10">
      <Hero />
      <Security />
      <Savings />
    </div>
  );
};

export default Home;
