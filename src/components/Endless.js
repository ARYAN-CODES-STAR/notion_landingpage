// ThreeColumnsPage.js

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
          <div className="mr-4 ml-[80%] mb-0">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png"
              alt=""
            />
          </div>
          {/* <div> */}
            <h1 className="text-5xl font-bold">Endless ways to use it</h1>
          {/* </div> */}
          {/* <div className="flex mt-[30%]"> */}
          {/* Column 1 */}
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
              {/* <div className="bg-green-200 p-4">Div 2</div> */}
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
              {/* <div className="mb-4 bg-yellow-200 p-4">Div 3</div> */}
              {/* <div className="mb-4 bg-orange-200 p-4">Div 4</div> */}
              {/* <div className="bg-red-200 p-4">Div 5</div> */}
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
              {/* <div className="mb-4 bg-purple-200 p-4">Div 6</div> */}
              {/* <div className="mb-4 bg-pink-200 p-4">Div 7</div>
              <div className="bg-indigo-200 p-4">Div 8</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColumnsPage;

// <div className="items-center h-screen">
//   <div className="flex-row">
//     {/* Title and Image */}
//     <div className="ml-[30%]">
//       <div className="flex mb-8 mt-64">
//         <div>
//           <h1 className="text-5xl font-bold mb-2">
//             Join a global movement.
//             <br /> Unleash your creativity.
//           </h1>

//           <p className="mt-4">
//             Our vibrant community produces content, teaches courses, and leads
//             events all over
//             <br />
//             the world.
//           </p>
//           <p className="m-4">
//             <a className="text-sky-500 " href="">
//               Learn More →{" "}
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//     <img src={img3} alt="Image 1" className="absolute ml-[15%]" />
//   </div>

//   <div className="flex justify-between p-4 mt-[15%] gap-5 ml-10 mr-10">
//     {/* Box 1 */}
//     <div className="flex-1 bg-gray-100 p-4">
//       <div className="text-left ml-4">
//         <h1 className="text-7xl text-blue-500">1M+</h1>
//         <p className="text-2xl font-semibold">community</p>
//       </div>
//     </div>

//     {/* Box 2 */}
//     <div className="flex-1 bg-gray-100 p-4">
//       <div className="text-left ml-4">
//         <h1 className="text-7xl text-blue-500">150+</h1>
//         <p className="text-2xl font-semibold">community groups</p>
//       </div>
//     </div>

//     {/* Box 3 */}
//     <div className="flex-1 bg-gray-100 p-4">
//       <div className="text-left ml-4">
//         <h1 className="text-7xl text-blue-500">50+</h1>
//         <p className="text-2xl font-semibold">countries represented</p>
//       </div>
//     </div>
//   </div>

//   {/* //////////////////////
//    */}

//   <div className="flex ml-10 mr-10 gap-3">
//     {/* Div 1 */}
//     <div className="flex-1 bg-gray-100 p-4 text-left">
//       <h2 className="text-2xl font-bold">An always-on support network</h2>
//       <p className="text-gray-600">
//         Swap setups and share tips in over 149 online communities.
//       </p>
//       <img
//         src="https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png"
//         alt="Image 1"
//         className="mt-4 size-128"
//       />
//     </div>
//     {/* https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png */}

//     {/* Div 2 */}
//     <div className="flex-1 bg-gray-100 p-4 text-left">
//       <h2 className="text-2xl font-bold">Choose your language</h2>
//       <p className="text-gray-600">
//         Notion currently supports English, Korean, Japanese, French, German,
//         Spanish, and Portuguese. With more to come!
//       </p>
//       <img
//         src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png"
//         alt="Image 2"
//         className="mt-4 size-128"
//       />
//     </div>
//   </div>
// </div>;
