import React from "react";
import { TbArrowsCross } from "react-icons/tb";
import img2 from "../assets/list.png";

function BuildBlock() {
  return (
    <>
      <div className="flex items-center ml-[20%]">
        <div className="mr-4">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Powerful building blocks</h1>
        </div>
      </div>
      <div className="bg-gray-100 w-[65%] h-[70%] ml-[20%] mr-[0%] flex rounded-md">
        <div className="ml-2">
          <TbArrowsCross className="text-blue-500 text-2xl font-bold ml-2 mb-2" />
          <h1 className="text-2xl font-bold ml-0 p-1">
            Visualize, filter & sort any way you want
          </h1>
          <p>
            Show only tasks assigned to you, or items marked as urgent. <br />{" "}
            Break down any project in the way that’s most helpful to you.
          </p>
          <img src={img2} alt="" />
        </div>

        {/* <div> */}
        {/* <img src={img2} alt="" /> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default BuildBlock;
