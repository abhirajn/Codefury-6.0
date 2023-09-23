
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
      <section className="py-[5rem]  sm:py-[8rem] px-5 ">
        <div className="flex flex-col justify-center items-center">
          <h2
            class=""
            // class="text-3xl font-bold mb-12 flex justify-center orange_gradient"
            className=" text-[2rem] sm:text-[4.5rem]"
          >
            Testimonials
          </h2>
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

            <SwiperSlide className="py-11" style={{backgroundColor: "#303032"}}>
              <div className="">
                <div className="flex justify-center mb-5">
                  <img
                    src="https://www.bollywoodpicturesgallery.com/media/actor/salman_khan/salman_khan_001_mwrl.jpg"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className=" text-xl text-lg font-bold mb-2 ">Sallu</h3>
                <h6 className="font-medium orange_gradient mb-2">
                  Web Developer
                </h6>
                <p className="px-10 md:text-lg sm:text-base ">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur" <br /> ⭐⭐⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: "#303032"}}>
              <div className="py-7">
                <div className="flex justify-center mb-5 ">
                  <img
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/8F9A/production/_107526763_58462021_406552023468743_2926755006583406592_o.jpg"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Kabir</h3>
                <h6 className="font-medium orange_gradient mb-2">
                  App developer
                </h6>
                <p className="px-10 md:text-lg sm:text-base">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur" <br /> ⭐⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: "#303032"}}>
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/03/aamir-ghajini-2-1583936081.jpg"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Forgot</h3>
                <h6 className="font-medium orange_gradient mb-2">
                  Businessman
                </h6>
                <p className="px-10 md:text-lg sm:text-base">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur" <br /> ⭐⭐⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: "#303032"}}>
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://i.ndtvimg.com/mt/movies/2014-06/bomanmain.jpg?im=Resize=(1230,900)"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Virus</h3>
                <h6 className="font-medium orange_gradient mb-2">Professor</h6>
                <p className="px-10 md:text-lg sm:text-base">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur" <br /> ⭐⭐⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: "#303032"}}>
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://www.jagranimages.com/images/newimg/03022020/03_02_2020-munna-bhai-3_19995496.jpg"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Munna</h3>
                <h6 className="font-medium orange_gradient mb-2">Doctor</h6>
                <p className="px-10 md:text-lg sm:text-base">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur" <br /> ⭐
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: "#303032"}}>
              <div className="py-7">
                <div className="flex justify-center mb-5 py-1">
                  <img
                    src="https://www.filmibeat.com/img/2019/02/xc-3-1547806334-jpg-pagespeed-ic-a78ivpinds-1549252520-1549613031-1549726804.jpg"
                    class="rounded-full shadow-lg w-32 "
                    id="testimg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Rocky</h3>
                <h6 className="font-medium orange_gradient mb-2">CEO</h6>
                <p className="px-10 md:text-lg sm:text-base">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur" <br /> ⭐⭐
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}