import React from "react";
import cio from "../../assets/cio.svg";
import fast from "../../assets/fast.svg";
import cnb from "../../assets/output.png";
import pym from "../../assets/pym.svg";
import tect from "../../assets/tech.png";
import crunch from "../../assets/brand1.png";

const Featured = () => {
  return (
    <div className="w-full py-12 text-center font-inter px-4 sm:px-6 lg:px-8">
      <h4 className="text-2xl sm:text-3xl font-bold text-[#122231] mb-6">
        As featured in
      </h4>

      <div className="featured-logo flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
        <a
          href="https://techcabal.com/2024/07/18/piggyvest-named-among-worlds-top-250-fintech-companies-by-cnbc/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={tect}
            alt="TechCabal logo"
            className="w-32 h-auto object-contain"
          />
        </a>
        <a
          href="https://www.cnbc.com/the-worlds-top-250-fintech-companies-2024/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={cnb}
            alt="CNBC logo"
            className="w-32 h-auto object-contain"
          />
        </a>
        <a
          href="https://techcrunch.com/2018/05/31/nigerias-piggybank-ng-raises-1-1m-announces-group-investment-product/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={crunch}
            alt="TechCrunch logo"
            className="w-32 h-auto object-contain"
          />
        </a>
        <a
          href="https://www.pymnts.com/digital-first-banking/2022/piggyvest-seeks-to-boost-consumer-savings-and-investment-in-nigerias-low-trust-environment/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={pym}
            alt="PYMNTS logo"
            className="w-32 h-auto object-contain"
          />
        </a>
        <a
          href="https://www.fastcompany.com/90457936/africa-most-innovative-companies-2020"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={fast}
            alt="Fast Company logo"
            className="w-32 h-auto object-contain"
          />
        </a>
        <a
          href="https://www.cio.com/article/401314/how-investment-and-savings-platform-piggyvest-is-changing-nigerias-youth-culture.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={cio}
            alt="CIO logo"
            className="w-32 h-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default Featured;
