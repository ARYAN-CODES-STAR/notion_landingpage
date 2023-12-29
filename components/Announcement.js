import React from "react";

function Announcement() {
  return (
      
      <div className="bg-gray-100 px-4 py-4 text-black flex  items-center justify-center sticky">
      <span className="whitespace-nowrap rounded-full bg-purple-700 px-1.5 py-0 text-sm text-white font-medium mx-3">
        New
      </span>
        <p className="text-center font-semibold">
          Introducing Q&A – a new way to get answers in Notion.
          <a href="/h" className="inline-block mx-3 font-bold">
            Sign up for Q&A Waitlist →
          </a>
        </p>
      </div>
   
  );
}

export default Announcement;
