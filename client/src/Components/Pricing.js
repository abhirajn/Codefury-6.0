import React, { useMemo } from "react";
// import Image from "next/image";
// import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div 
      className=" text-black  bg-gradient-to-b from-black-300 to-black-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center text-black">
        <div className="flex flex-col w-full text-black">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-black"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex text-black flex-col justify-center items-center border-2 border-black-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_wL53MviQD-FqlbQNV32l2RKysICBn8IJRVFvxkAsqgOjEhGEtZr2fk19VNJ5uxmWsQ&usqp=CAU"
                    
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black font-medium capitalize my-2 sm:my-7">
                  Free Plan
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow text-black">
                  <li className="relative check custom-list my-2 text-black">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2 text-black">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2 text-black">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2 text-black">
                    Works on All Devices
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black text-center mb-4 ">
                    Free
                  </p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-black-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16 text-black">
                <image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg  text-black font-medium capitalize my-2 sm:my-7 text-black">
                Standard Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start border-black-500 text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2 text-black">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2 text-black">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2 text-black">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2 text-black">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2 text-black">
                  Connect Anyware{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black text-center mb-4 ">
                  $9 <span className="text-black-500">/ mo</span>
                </p>
                <ButtonOutline>Select</ButtonOutline>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-black-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black font-medium capitalize my-2 sm:my-7">
                Premium Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2 text-black">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2 text-black">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2 text-black">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2 text-black">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2 text-black">
                  Connect Anyware{" "}
                </li>
                <li className="relative check custom-list my-2 text-black">
                  Get New Features{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black text-center mb-4 ">
                  $12 <span className="text-black">/ mo</span>
                </p>
                <ButtonOutline>Select</ButtonOutline>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;