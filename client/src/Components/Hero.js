import React, { useMemo } from "react";
// import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "https://www.svgrepo.com/download/3278/users.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "https://www.svgrepo.com/show/127575/location-sign.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "https://www.svgrepo.com//show/76987/server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="  px-5 xl:px-16 mx-auto overscroll-y-none"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className="text-black flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-normal">
              Embrace Your Well-Being: Your Journey to Mental Wellness Begins Here
              </h1>
              <p className="text-black my-4 mx-6">
              Welcome to a Place of Healing and Hope. Discover Resources, Support, and Guidance to Nourish Your Mental Well-Being. Your Journey to a Healthier You Starts Now
              </p>
              <ButtonPrimary className='m-5'>Get Started</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="text-black h-full w-full" variants={scrollAnimation}>
                <img
                  src="https://www.everypixel.com/covers/free/vector/health/mental/cover.jpg"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="text-black rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className=" text-black flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex text-black items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;