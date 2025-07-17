import flexnaira from "../../assets/flex-naira.avif";
import flexdollar from "../../assets/flexdollar-img.avif";
import housemoney from "../../assets/house-money.png";
import target from "../../assets/target-saving.avif";
import safe from "../../assets/safe.png";
import piggybank from "../../assets/piggybank.png";
import { CornerDownRight } from "lucide-react";

const Savings = () => {
  const savingPlans = [
    {
      id: 1,
      title: "Automated Savings",
      description:
        "Build a dedicated savings faster on your terms, automatically or manually.",
      linkText: "Piggybank",
      linkHref: "#",
      imageSrc: piggybank,
      titleColor: "text-[#003399]",
      linkColor: "text-[#003399]",
    },
    {
      id: 2,
      title: "Fixed Savings",
      description:
        "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      linkText: "Safelock",
      linkHref: "#",
      imageSrc: safe,
      titleColor: "text-[#2e9af2]",
      linkColor: "text-[#2e9af2]",
    },
    {
      id: 3,
      title: "Goal-oriented Savings",
      description:
        "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      linkText: "Target Savings",
      linkHref: "#",
      imageSrc: target,
      titleColor: "text-[#069c3f]",
      linkColor: "text-[#069c3f]",
    },
    {
      id: 4,
      title: "Flex Naira",
      description:
        "Save, transfer, manage, organise, and withdraw your money at any time.",
      linkText: "Flex Naira",
      linkHref: "#",
      imageSrc: flexnaira,
      titleColor: "text-[#e6278d]",
      linkColor: "text-[#e6278d]",
    },
    {
      id: 5,
      title: "Flex Dollar",
      description:
        "Save and grow your money in foreign currencies such as Dollars.",
      linkText: "Flex Dollar",
      linkHref: "#",
      imageSrc: flexdollar,
      titleColor: "text-[#0c1926]",
      linkColor: "text-[#0c1926]",
    },
    {
      id: 6,
      title: "HouseMoney",
      description: "Plan for your rent and household expenses",
      linkText: "House Money",
      linkHref: "#",
      imageSrc: housemoney,
      titleColor: "text-[#ff773d]",
      linkColor: "text-[#ff773d]",
    },
  ];

  return (
    <div className="w-full py-10 lg:py-24 px-4 sm:px-6 lg:px-8 font-inter bg-gray-50">
      <div className="flex flex-col justify-center items-center gap-4 mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122231]">
          Many ways to build your savings
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Earn 12%-22% when you save with any of these PiggyVest plans.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full py-2 gap-8">
        {savingPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white relative max-w-sm sm:max-w-md lg:max-w-lg h-[390px] w-full p-6 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="card-text w-full px-2 sm:px-4">
              <h1
                className={`text-2xl sm:text-3xl font-bold mb-4 ${plan.titleColor}`}
              >
                {plan.title}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="card-link absolute bottom-[10%] left-[10%]">
              <a
                href={plan.linkHref}
                className={`text-base font-semibold hover:underline flex gap-3 ${plan.linkColor}`}
              >
                <CornerDownRight />
                {plan.linkText}
              </a>
            </div>

            <div className="saving-card-img absolute w-[250px] right-[5%] bottom-[-10%]">
              <img
                src={plan.imageSrc}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Savings;
