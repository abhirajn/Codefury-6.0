
import React, { useState } from "react";
import { itemss1, itemss2 } from "./Content";
import { IoIosArrowDropdownCircle } from "react-icons/io";
// import "../../styles/globals.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="py-[5rem]">
      <>
        <div className="mx-4 flex flex-wrap mb-[3rem]">
          <div className="w-full px-4 pb-0">
            <div className="mx-auto mb-[10px] max-w-[520px] text-center lg:mb-6">
              <span className=" text-[2rem] sm:text-[4.5rem] font-bold">
                FAQ
              </span>
              <h2 className="mb-1 font-bold text-dark  text-2xl sm:text-x1">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate adipisci ipsum commodi odit magnam animi nam.
              </p>
            </div>
          </div>
        </div>

        {/* questions section it will be two cols in large and medium and i col in small  */}
        <div className=" items-center justify-center  lg:mx-[15%] md:mx-[15%] sm:mx-3 mx-2 ">
          <div className="pt-0 grid gap-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            {/* column 1 */}

            <div className="px-7  ">
              {itemss1.map((item, index) => (
                <div
                  key={item.title}
                  className=" mb-4 cursor-pointer "
                  style={{ backgroundColor: "#303032" }}
                  onClick={() => handleClick(index)}
                >
                  {/* question  */}
                  <button className="flex flex-row justify-between items-center font-semibold p-4 cursor-pointer ">
                    <IoIosArrowDropdownCircle className="w-6 h-6" /> &nbsp;{" "}
                    {item.title}
                  </button>

                  {/* answer */}
                  {index === activeIndex && (
                    <p className=" py-1 px-10 text-base leading-relaxed text-body-color ">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* column 2 */}

            <div className="px-7 ">
              {itemss2.map((item, index) => (
                <div
                  key={item.title}
                  className=" mb-4 "
                  style={{ backgroundColor: "#303032" }}
                  onClick={() => handleClick(index + itemss1.length)}
                >
                  {/* question  */}
                  <button className="flex flex-row justify-between items-center font-semibold p-4 cursor-pointer">
                    <IoIosArrowDropdownCircle className="w-6 h-6 text-black" /> &nbsp;{" "}
                    {item.title}
                  </button>

                  {/* answer  */}
                  {index + itemss1.length === activeIndex && (
                    <p className="py-1 px-10 text-base leading-relaxed text-body-color">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default FAQ;
