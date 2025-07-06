import React from "react";
import logo from "../assets/logo-grey.svg";
import comply from "../assets/compliance.avif";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-white font-inter">
      <div className="flex flex-wrap justify-around items-start w-full px-4 sm:px-6 lg:px-8 py-8 mb-5 border-b border-gray-300">
        <div className="flex flex-col mb-8 sm:mb-0">
          <img
            src={logo}
            alt="PiggyVest Logo"
            width="172.45"
            height="32"
            className="mb-4"
          />
          <img src={comply} alt="compliance Logo" width="130" />
        </div>

        <div className="mb-8 sm:mb-0 w-full sm:w-auto px-4">
          <p className="text-sm text-gray-900 mb-2 font-semibold">Products</p>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Piggybank
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Invest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Safelock
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Target Savings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Flex Naira
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Flex Dollar
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8 sm:mb-0 w-full sm:w-auto px-4">
          <p className="text-sm text-gray-900 mb-2 font-semibold">Company</p>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://blog.piggyvest.com/"
                rel="noreferrer noopener"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8 sm:mb-0 w-full sm:w-auto px-4">
          <p className="text-sm text-gray-900 mb-2 font-semibold">Legal</p>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Security
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start sm:items-end text-left sm:text-right w-full sm:w-72 px-4">
          <ul className="flex justify-start sm:justify-end gap-3 mb-4">
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/PiggyBankNG/"
              >
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/piggybankng/"
              >
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://mobile.twitter.com/PiggyBankNG/"
              >
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.tiktok.com/@piggybank_ng?_t=8cwbLU1TTcs&amp;_r=1"
              >
                <img src={tiktok} alt="Tiktok" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.youtube.com/@PiggyVest"
              >
                <img src={youtube} alt="Youtube" className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <a
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors mb-2"
            href="https://goo.gl/maps/NpjEYTjJuzxCUM9X7"
          >
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </a>
          <a
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors mb-2"
            href="mailto:contact@piggyvest.com"
          >
            contact@piggyvest.com
          </a>
          <a
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            href="tel:+2347009339339"
          >
            +234 700 933 9339
          </a>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 text-xs text-gray-600">
        <p className="mb-2 leading-relaxed">
          Piggyvest (formerly piggybank.ng) is the leading online savings &amp;
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="mb-2 leading-relaxed">
          PV Capital Limited is a fund manager duly licensed by the Securities
          and Exchange Commission (SEC) of Nigeria.
        </p>
        <p className="mt-14 font-bold text-gray-900">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </div>
    </footer>
  );
};

export default Footer;
