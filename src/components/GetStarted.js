import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/notion_logo2.jpg";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Download", href: "#", sublinks: ["Mac", "Windows"] },
  { name: "Solutions", href: "#" },
  {
    name: "Resources",
    href: "#",
    sublinks: ["Blog", "Podcast", "Webinars"],
  },
  { name: "Pricing", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      
      <main>
        <div className="relative sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-9xl font-bold font-sans tracking-tight text-black sm:text-6xl">
              Get started for free
              </h1>
              <p className="mt-6 text-2xl whitespace-pre font-normal text-gray-900">
              Play around with it first. Pay and add your team later.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <a
                  href="/j"
                  className="rounded-md bg-black px-2.5 py-1.5 font-bold leading-7 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Notion Free
                </a>
                <a
                  href="/j"
                  className="rounded-md px-2.5 py-1.5 font-normal leading-7 text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Request a demo→
                </a>
                
              </div>
            </div>
            <div className="mt-1 sm:mt-2">
              <div className="lg:m-1 lg:p-1">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"
                  alt="App Scrnt"
                  className="object-cover h-[60%] w-[60%] ml-[20%] mt-[2%]"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}