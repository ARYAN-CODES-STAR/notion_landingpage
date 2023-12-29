import React from "react";
import img from "../assets/notion_page.png";
import text from "../assets/textt.png"

function CutCosts() {
  return (
    <div className="items-center h-screen">
      <div className="flex-row">
        {/* Title and Image */}
        <div className="ml-[30%]">
          <div className="flex mb-8 mt-64">
            <div>
              <h1 className="text-6xl font-bold mb-2">
                Consolidate tools. <br /> Cut costs.
              </h1>

              <p>
                We got rid of nearly a dozen different tools because of what
                Notion does for us.
              </p>
            </div>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png" // Replace with the actual image URL
              alt="Main Image"
              className="ml-2 max-h-48"
            />
          </div>

          {/* Overlapping Images */}
          <div className="relative">
            <img
              src={img}
              alt="Image 1"
              className="absolute size-128 "
            />

           

            {/* <img src="https://i.ibb.co/5WRrTWQ/GARBAGE-COLLECTION.png" alt="GARBAGE-COLLECTION" className="absolute w-3/6 min-h-80 "/> */}
          </div>
          
          {/* <div className="text-3xl">
            We got rid of nearly a dozen different tools because of what Notion
            does for us.
          </div> */}
        </div>
        <img
              src={text}
              alt="Image 1"
              className="absolute size-128 mt-[10%] ml-[17%] "
            />
      </div>
    </div>
    // https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png
  );
}

export default CutCosts;
