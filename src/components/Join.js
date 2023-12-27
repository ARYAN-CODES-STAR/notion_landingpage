import React from "react";
import img from "../assets/notion_page.png";
import text from "../assets/textt.png";
import img3 from "../assets/img3.png";

function CutCosts() {
  return (
    <div className="items-center h-screen">
      <div className="flex-row">
        {/* Title and Image */}
        <div className="ml-[30%]">
          <div className="flex mb-8 mt-64">
            <div>
              <h1 className="text-5xl font-bold mb-2">
                Join a global movement.
                <br /> Unleash your creativity.
              </h1>

              <p className="mt-4">
                Our vibrant community produces content, teaches courses, and
                leads events all over
                <br />
                the world.
              </p>
              <p className="m-4">
                <a className="text-sky-500 " href="">
                  Learn More →{" "}
                </a>
              </p>
            </div>
           
          </div>

          

          
        </div>
        <img src={img3} alt="Image 1" className="absolute ml-[15%]" />
       
      </div>
     

      <div className="flex justify-between p-4 mt-[15%] gap-5 ml-10 mr-10">
        {/* Box 1 */}
        <div className="flex-1 bg-gray-100 p-4">
          <div className="text-left ml-4">
            <h1 className="text-7xl text-blue-500">1M+</h1>
            <p className="text-2xl font-semibold">community</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex-1 bg-gray-100 p-4">
          <div className="text-left ml-4">
            <h1 className="text-7xl text-blue-500">150+</h1>
            <p className="text-2xl font-semibold">community groups</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex-1 bg-gray-100 p-4">
          <div className="text-left ml-4">
            <h1 className="text-7xl text-blue-500">50+</h1>
            <p className="text-2xl font-semibold">countries represented</p>
          </div>
        </div>
      </div>

      {/* //////////////////////
       */}

      <div className="flex ml-10 mr-10 gap-3">
        {/* Div 1 */}
        <div className="flex-1 bg-gray-100 p-4 text-left">
          <h2 className="text-2xl font-bold">An always-on support network</h2>
          <p className="text-gray-600">
            Swap setups and share tips in over 149 online communities.
          </p>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png"
            alt="Image 1"
            className="mt-4 size-128"
          />
        </div>
        {/* https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png */}

        {/* Div 2 */}
        <div className="flex-1 bg-gray-100 p-4 text-left">
          <h2 className="text-2xl font-bold">Choose your language</h2>
          <p className="text-gray-600">
            Notion currently supports English, Korean, Japanese, French, German,
            Spanish, and Portuguese. With more to come!
          </p>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png"
            alt="Image 2"
            className="mt-4 size-128"
          />
        </div>
      </div>
    </div>
    // https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png
  );
}

export default CutCosts;
