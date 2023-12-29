import React from "react";
import { BsStars } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="flex overflow-x-hidden">
      {" "}
      <aside className="w-64 bg-white text-black p-4">
        <div className="flex items-center mb-4">
          {/* <img src="path_to_logo.png" alt="Logo" className="w-8 h-8 mr-2" /> */}
          <h1 className="text-xl font-bold">Your Title</h1>
        </div>

        <nav>
          <ul>
            <li className="mb-2">
              <a href="/j" className="text-black hover:text-gray-400">
                Link 1
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a href="/d" className="text-black hover:text-gray-400">
                Link 2
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <div className="mb-4">
          <BsStars className="text-blue-500 h-[15%] w-[10%] mb-2" />
          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <p>A bird's eye view of the team's ongoing and future projects.</p>
        </div>

        <div className="flex">
          {/* Box 1 */}
          <div className="w-1/2 pr-4">
            <div className="bg-white p-4 rounded-md mb-1">
              <h2 className="text-xl font-bold mb-1">Agenda</h2>
              <p className="mb-2">Date: [Your Date]</p>
              <ul>
                <li className="mb-1">Event 1</li>
                <li className="mb-1">Event 2</li>
                {/* Add more events as needed */}
              </ul>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-1/2 pl-4">
            <div className="bg-white p-4 rounded-md mb-4">
              <h2 className="text-xl font-bold mb-2">To-Do List</h2>
              <ul>
                <li className="mb-2">
                  <input type="checkbox" className="mr-2" />
                  Task 1
                </li>
                <li className="mb-2">
                  <input type="checkbox" className="mr-2" />
                  Task 2
                </li>
                {/* Add more tasks as needed */}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
