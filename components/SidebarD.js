import React from "react";
// import { BsStars } from "react-icons/bs";
// import { MdMenuBook } from "react-icons/md";
// import { SiGoogleearthengine } from "react-icons/si";
import { HiThumbUp } from "react-icons/hi";

function SidebarC() {
  return (
    <div className="flex overflow-x-hidden">
      {" "}
      <aside className="w-64 bg-white text-black p-4">
        <div className="flex items-center mb-4">
          {/* <img src="path_to_logo.png" alt="Logo" className="w-8 h-8 mr-2" /> */}
          <h1 className="text-xl font-medium">Your Title</h1>
        </div>

        <nav>
          <ul>
            <li className="mb-2">
              <a href="/j" className="text-black hover:text-gray-400">
                Search
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Updates
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                General
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Engineering
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Design
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Product
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Marketing
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <div className="mb-4">
          {/* <BsStars className="text-blue-500 h-[15%] w-[10%] mb-2" /> */}
          {/* <SiGoogleearthengine className="text-blue-500 h-[15%] w-[10%] mb-2"/> */}
          <HiThumbUp className="text-blue-500 h-[15%] w-[10%] mb-2" />

          <h2 className="text-2xl font-bold mb-2">Stand-up @Today</h2>
          {/* <p>A bird's eye view of the team's ongoing and future projects.</p> */}
        </div>

        <div className="flex">
          {/* Box 1 */}
          <div className="w-1/2 pr-4">
            <div className="bg-white p-4 rounded-md mb-1">
              <h2 className="text-xl font-bold mb-1">Agenda</h2>
              {/* <p className="mb-2">Date: [Your Date]</p> */}
              <ul>
                <li className="mb-1">Welcoming new team members</li>
                <li className="mb-1">Q2 platform metrics overview</li>
                {/* <li className="mb-1">PCI Compliance</li>
                <li className="mb-1">Rate App prompt</li> */}
                {/* Add more events as needed */}
              </ul>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-1/2 pl-4">
            <div className="bg-white p-4 rounded-md mb-4">
              <h2 className="text-xl font-bold mb-2">Cod</h2>
              <ul>
                {/* <li className="mb-2">
                  <input type="checkbox" className="mr-2" />
                  Code reviews
                </li> */}
                {/* <li className="mb-2">
                  <input type="checkbox" className="mr-2" />
                  React
                </li> */}
                {/* Add more tasks as needed */}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SidebarC;
