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
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className=" mt-24 px-5 xl:px-16 mx-auto overscroll-y-none"
      id="about"
     
    >
      <ScrollAnimationWrapper>
        <div class="fullg"  style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-instagram-posts-collection-world-mental-health-day_23-2150722498.jpg?w=1380&t=st=1695515847~exp=1695516447~hmac=e7152b30eaf8cb507e9d3a2322f742aafc50327c54b58133bf9dc034551f22bc")'
      }}>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16 subheaderg"
            variants={scrollAnimation}
           >
            <div className="text-black flex flex-col justify-center items-start row-start-2 sm:row-start-1" >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-normal">
                Want anything to be easy with <strong>LaslesVPN</strong>.
              </h1>
              <p className="text-black mt-4 mb-6">
                Provide a network for all your needs with ease and fun using
                LaslesVPN discover interesting features from us.
              </p>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
            {/* <div className="flex w-full">
              <motion.div className="text-black h-full w-full" variants={scrollAnimation}>
                <img
                  src="https://cdn.powerofpositivity.com/wp-content/uploads/2023/01/positive-thinking-2.png"
                  style={{position:"background"}}
                  layout="responsive"
                />
              </motion.div>
            </div> */}
          </motion.div>
          </div>
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