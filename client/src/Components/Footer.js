import React from "react";
// import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../assests/facebook.svg";
import Twitter from "../assests/twitter.svg";
import Instagram from "../assests/instagram.svg";
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterXFill} from 'react-icons/ri'
const Footer = () => {
  let iconStyles = { color: "black", fontSize: "1.5em" };
  return (
    <div className="bg-gray-300 pt-28 pb-24 ">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <p className="mb-4 font-large text-black">
            <strong className="font-large text-black">Wellness</strong> is a platform where you can get solution to all mental health problems.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <BsFacebook className="h-6 w-6" style={{ fill: 'black' }}/>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <RiTwitterXFill className="h-6 w-6" style={{ fill: 'black' }} />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <BsInstagram className="h-6 w-6" style={{ fill: 'black' }} />
            </div>
          </div>
          <p className="text-black">©{new Date().getFullYear()} - Codefury</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black mb-4 font-medium text-lg">Product</p>
          <ul className="text-black">
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Yoga Mat{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Sleep mask{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Hair oil{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Books{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Mentorship{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black">
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
               FAQ{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Contact Us{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="text-black my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

