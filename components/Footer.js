import React from "react";
import logo from "../assets/notion_logo2.jpg";

function Footer() {
  return (
    <div className="flex">
      {/* Column 1 */}
      <div className="w-1/4 p-4">
        {/* Image or logos */}
        {/* <img */}
        {/* // src="path-to-social-media-logos.jpg" */}
        <img className="h-10 m-0 mt-4 mb-4" src={logo} alt="" />
        {/* alt="Social Media Logos" */}
        {/* className="mb-4" */}
        />
        {/* Dropdown for language */}
        {/* <select className="border p-2">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select> */}
      </div>

      {/* Column 2 */}
      <div className="w-1/4 p-4">
        {/* Product Features */}
        {/* <h2 className="text-2xl font-bold mb-4">Product Features</h2> */}
        <ul className="p-1">
          <li className="font-semibold p-1">Solutions</li>
          <li className="p-1">Enterprise</li>
          <li className="p-1">Small business</li>
          <li className="p-1">Personal use</li>
          <li className="p-1">Remote work</li>
          {/* Add more features as needed */}
        </ul>
        <pre> </pre>
        <ul>
          <li className="font-semibold">Download</li>
          <li className="p-1">Projects</li>
          <li className="p-1">Docs</li>
          <li className="p-1">Notion AI</li>
          <li className="p-1">What’s new</li>
          {/* Add more features as needed */}
        </ul>
      </div>

      {/* Column 3 */}
      <div className="w-1/4 p-4">
        {/* Reviews and Team */}
        {/* <h2 className="text-2xl font-bold mb-4">Reviews and Team</h2> */}
        {/* Add review and team content as needed */}

        <ul>
          <li className="font-semibold">Solutions</li>
          <li className="p-1">Enterprise</li>
          <li className="p-1">Small business</li>
          <li className="p-1">Personal use</li>
          <li className="p-1">Remote work</li>
          {/* Add more features as needed */}
        </ul>
        <pre> </pre>
        <ul>
          <li className="font-semibold">Download</li>
          <li className="p-1">Projects</li>
          <li className="p-1">Docs</li>
          <li className="p-1">Notion AI</li>
          <li className="p-1">What’s new</li>
          {/* Add more features as needed */}
        </ul>
      </div>

      {/* Column 4 */}
      <div className="w-1/4 p-4">

      <ul>
          <li className="font-semibold">Solutions</li>
          <li className="p-1">Enterprise</li>
          <li className="p-1">Small business</li>
          <li className="p-1">Personal use</li>
          <li className="p-1">Remote work</li>
          {/* Add more features as needed */}
        </ul>
        <pre> </pre>
        <ul>
          <li className="font-semibold">Download</li>
          <li className="p-1">Projects</li>
          <li className="p-1">Docs</li>
          <li className="p-1">Notion AI</li>
          <li className="p-1">What’s new</li>
          {/* Add more features as needed */}
        </ul>
        {/* Get Started and Skills */}
        {/* <h2 className="text-2xl font-bold mb-4">Get Started and Skills</h2> */}
        {/* Add get started and skills content as needed */}
      </div>
    </div>
  );
}

export default Footer;
