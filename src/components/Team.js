// import React from 'react'

// function Team() {
//   return (
//     <div className=''>
//         <div className='flex items-center justify-center'></div>
//     </div>
//   )
// }

// export default Team

import React from "react";
import { FaHome } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { SiPivotaltracker } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";
import { MdDone } from "react-icons/md";

const ThreeColumnsPage = () => {
  return (
    <>
      <div className="mt-[20%]">
        <div className="items-center">
          {/* <div className="mr-4 ml-[80%] mb-0"> */}
          {/* <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png"
              alt=""
            /> */}
          {/* </div> */}

          <h1 className="text-4xl font-bold">Every team, side-by-side</h1>
          <div className="flex items-center justify-center mt-4 rounded font-semibold lg:hidden">
            <button className="mr-3 hover:bg-gray-200 px-2 py-1">
              Engineering
            </button>
            <button className="mr-3 hover:bg-gray-200 px-2 py-1">
            Design
            </button>
            <button className="mr-3 hover:bg-gray-200 px-2 py-1">
              Product
            </button>
            <button className="mr-3 hover:bg-gray-200 px-2 py-1">
              Marketing
            </button>
            <button className="mr-3 hover:bg-gray-200 px-2 py-1">
              Operations
            </button>
            <button className="mr-3 hover:bg-gray-200 px-2 py-1">HR</button>
          </div>
          <div className="flex items-center justify-center mt-4 rounded font-semibold">
            <div className="mr-3 w-[10%] h-[10%] bg-slate-50">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png"
                  className="w-1/2 h-1/2"
                  alt=""
                />
                <p className="flex">Engineering</p>
              </div>
            </div>
            <div className="mr-3 w-[10%] h-[20%] bg-slate-100 hover:bg-slate-50">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png"
                  className="w-1/2 h-1/2"
                  alt=""
                />
                <p className="flex">Design</p>
              </div>
            </div>
            <div className="mr-3 w-[10%] h-[20%] bg-slate-100 hover:bg-slate-50">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/product.png"
                  className="w-1/2 h-1/2"
                  alt=""
                />
                <p className="flex">Product</p>
              </div>
            </div>
            <div className="mr-3 w-[10%] h-[20%] bg-slate-100 hover:bg-slate-50">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png"
                  className="w-1/2 h-1/2"
                  alt=""
                />
                <p className="flex">Marketing</p>
              </div>
            </div>
            <div className="mr-3 w-[10%] h-[20%] bg-slate-100 hover:bg-slate-50">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/operations.png"
                  className="w-1/2 h-1/2"
                  alt=""
                />
                <p className="flex">Operations</p>
              </div>
            </div>
            <div className="mr-3 w-[10%] h-[20%] bg-slate-100 hover:bg-slate-50">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png"
                  className="w-1/2 h-1/2"
                  alt=""
                />
                <p className="flex">HR</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-4">
            <div className="flex-1 w-1/3 p-4">
              <div className="mb-5 bg-gray-100 h-full p-6">
                <div className="flex flex-col text-left">
                  <FaHome className="text-red-600 size-8 mb-3" />
                  <h1 className="text-xl font-bold mb-3">Company wiki</h1>
                  <p>
                    <a className="text-blue-500 mb-3" href="">
                      Get Template →
                    </a>
                  </p>

                  <img
                    className="mt-16"
                    src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/company-wiki-template.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-1 w-1/3 p-4">
              <div className="mb-5 bg-gray-100 p-6">
                <div className="flex flex-col text-left">
                  <FaFlagCheckered className="text-blue-600 size-8 mb-4" />
                  <h1 className="text-xl font-bold mb-4">Product Roadmap</h1>
                  <p>
                    <a className="text-blue-500 mb-4 font-semibold" href="">
                      Get Template →
                    </a>
                  </p>
                </div>
              </div>

              {/* // 2nd 2nd column */}

              <div className="mb-5 bg-gray-100 p-6">
                <div className="flex flex-col text-left">
                  <CgNotes className="text-yellow-600 size-8 mb-4" />
                  <h1 className="text-xl font-bold mb-4">Meeting Notes</h1>
                  <p>
                    <a className="text-blue-500 mb-4" href="">
                      Get Template →
                    </a>
                  </p>
                </div>
              </div>

              <div className="mb-5 bg-gray-100 p-6">
                <div className="flex flex-col text-left">
                  <SlCalender className="size-8 mb-4 text-green-500" />
                  <h1 className="text-xl font-bold mb-4">Meeting Notes</h1>
                  <p>
                    <a className="text-blue-500 mb-4" href="">
                      Get Template →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-1 w-1/3 p-4">
              <div className="mb-5 bg-gray-100 p-6">
                <div className="flex flex-col text-left">
                  <MdDone className="size-8 mb-4 text-orange-600 font-bold" />
                  <h1 className="text-xl font-bold mb-4">OKRs</h1>
                  <p>
                    <a className="text-blue-500 mb-4" href="">
                      Get Template →
                    </a>
                  </p>
                </div>
              </div>

              {/* // 2nd one */}
              <div className="mb-5 bg-gray-100 p-6">
                <div className="flex flex-col text-left">
                  <IoAirplane className="size-8 mb-4 text-red-600" />
                  <h1 className="text-xl font-bold mb-4">Vacation planner</h1>
                  <p>
                    <a className="text-blue-500 mb-4" href="">
                      Get Template →
                    </a>
                  </p>
                </div>
              </div>

              {/* 3rd one */}
              <div className="mb-5 bg-gray-100 p-6">
                <div className="flex flex-col text-left">
                  <SiPivotaltracker className="size-8 mb-4 text-purple-600" />
                  <h1 className="text-xl font-bold mb-4">Habit tracker</h1>
                  <p>
                    <a className="text-blue-500 mb-4" href="">
                      Get Template →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColumnsPage;
