import React from "react";

function Customz() {
  return (
    <div className="">
      <div className="flex w-[65%] ml-[20%] mr-4">
        {/* Image 1 */}
        <div className="bg-gray-100">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png"
            alt="Description of Image 1"
            className="size-full" // Adjust the width as needed
          />
        </div>

        {/* Image 2 */}
        <div className="bg-gray-100">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
            alt="Description of Image 2"
            className="size-full" // Adjust the width as needed
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-pretty text-2xl font-semibold items-center justify-center mt-8 mb-2 ml-[1/2]">
          {" "}
          <blockquote>
            Notion adapts to your needs. It’s as <br /> minimal or as powerful
            as you need it to be
          </blockquote>
        </p>
        <div className="flex">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png"
            alt=""
            className="size-fit ml-[45%]"
          />
          <div className="flex-row ml-2">
            <h1 className="font-bold">Rahim Makani</h1>
            <h3 className="">Director of Product, Matchgroup</h3>
          </div>
          {/* <h1 className="font-bold">Rahim Makani</h1>
          <h3 className="">Director of Product, Matchgroup</h3> */}
        </div>
        {/* <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png" alt="" className="size-fit ml-[45%]" /> */}
      </div>
    </div>
  );
}

export default Customz;

// div;

// div;
// div;
// div;
