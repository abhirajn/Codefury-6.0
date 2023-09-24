
import React from "react";

import { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
// import { Pagination } from 'swiper';

export default function Testimonials() {
  //to calculate the window size
  const [windowSize, setWindowSize] = useState([
    // window.innerWidth,
    // window.innerHeight
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Responsive slider
  // here number is nunmber of slides to show on the screen
  var number = 3;
  if (windowSize[0] < 850 && windowSize[0] > 600) {
    number = 2;
  } else if (windowSize[0] < 600) {
    number = 1;
  }

  const swiperRef = useRef(null);
  const handleMouseEnter = () => {
    console.log("Enter");
    swiperRef.current.swiper.autoplay.stop();
  };
  const handleMouseLeave = () => {
    console.log("Enter");
    swiperRef.current.swiper.autoplay.start();
  };
  return (
    <>
      {/* title */}
      <section className="py-[5rem]  sm:py-[8rem] px-5 mx-10 ">
        <div className="flex flex-col justify-center items-center">
          <h2
            class=""
            // class="text-3xl font-bold mb-12 flex justify-center orange_gradient"
            className="text-black"
          >
            Trusted by Thousands of Happy Customer

          </h2>
          <h3 className="text-black">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</h3>
          <div className="h-1 w-[30%] bg-orange-300 rounded-full "></div>
        </div>
        <br /> <br /> <br />
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <Swiper
            slidesPerView={number}
            ref={swiperRef}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper border-2 border-solid border-gray-200 max-w-[1500px]"
          >
            {/* testimonials */}

            <SwiperSlide className="py-11">
              <div className="">
                <div className="flex justify-center mb-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkM3XhaMlh-nREAy91vPL7N41VPszTKqZikw&usqp=CAU"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-black text-xl text-lg font-bold mb-2 ">Sarah</h3>
                <h6 className="text-black font-medium orange_gradient mb-2">
                  IT employee
                </h6>
                <p className="text-black px-10 md:text-lg sm:text-base ">
                  "I can't express how grateful I am for the support I received from this website. It's been a true lifeline for me during some tough times. Thank you for making a difference in my mental health journey!" <br /> ⭐⭐⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-7">
                <div className="flex justify-center mb-5 ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrhWXqJlJWNs2__nePzg_FcwuPfkaCEWQkA&usqp=CAU"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">Lisa</h3>
                <h6 className="text-black font-medium orange_gradient mb-2">
                  Teacher
                </h6>
                <p className="text-black px-10 md:text-lg sm:text-base">
                  "I stumbled upon this website when I was feeling lost and overwhelmed. The articles and tools provided have given me hope and a sense of empowerment. I'm on a much healthier path now!" <br /> ⭐⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">David</h3>
                <h6 className="text-black font-medium orange_gradient mb-2">
                  Businessman
                </h6>
                <p className="text-black px-10 md:text-lg sm:text-base">
                  "I've been to therapists, but this website has been an unexpected source of comfort and guidance. The tips and advice I found here have made a significant impact on my mental well-being" <br /> ⭐⭐⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLv96hcUtr0lZ57A2V-lPJFG8-ltwA0I96RA&usqp=CAU"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">Alex</h3>
                <h6 className="text-black font-medium orange_gradient mb-2">Professor</h6>
                <p className=" text-black px-10 md:text-lg sm:text-base">
                  "Finding this website was a turning point in my life. The content and community support have guided me toward a brighter future. Thank you for being a part of my mental health journeyr" <br /> ⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://www.pngkey.com/png/detail/157-1579943_no-profile-picture-round.png"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">Grace</h3>
                <h6 className="text-black font-medium  mb-2">Doctor</h6>
                <p className="text-black px-10 md:text-lg sm:text-base">
                  "This website has been a beacon of hope for me. It helped me better understand my mental health and gave me the strength to seek professional help. You are making a real impact" <br /> ⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VTkvvi3P4QQVG2Rn87BBKVbNlwslj2bQew&usqp=CAU"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">Mark</h3>
                <h6 className="font-medium text-black mb-2">CEO</h6>
                <p className="text-black px-10 md:text-lg sm:text-base">
                  "I owe my progress in managing stress and anxiety to this website. It's my go-to place for helpful advice and a reminder that I'm not alone in my struggles" <br /> ⭐⭐
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}