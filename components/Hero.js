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
      <div className="px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex">
            <a href="/h" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 m-0 mt-4" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="lg:flex lg:ml-4 md:mt-4 md:ml-0 sm:ml-0 lg:gap-x-3 ">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-md font-medium text-gray-900 sticky"
                >
                  {item.name}
                </a>
                {item.sublinks && item.sublinks.length > 0 && (
                  <div className="absolute hidden bg-white p-2 mt-2 space-y-2 divide-y divide-gray-100 rounded-md group-hover:block">
                    {item.sublinks.map((sublink) => (
                      <a
                        key={sublink}
                        href={`#${sublink}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                      >
                        {sublink}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/b"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Request a demo <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="/a"
              className="text-md font-bold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
            <a
                  href="/j"
                  className="rounded-md bg-black px-1.5 py-1.5 font-bold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Notion Free 
                </a>
          </div>
        </nav>
        {/* <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog> */}
      </div>
      <main>
        <div className="relative sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-9xl font-bold font-sans tracking-tight text-black sm:text-6xl">
                Write, plan, share. <pre></pre>With AI at your side.
              </h1>
              <p className="mt-6 text-2xl whitespace-pre font-semibold text-gray-900">
                Notion is the connected workspace where better, faster work
                happens.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <a
                  href="/j"
                  className="rounded-md bg-black px-2.5 py-1.5 font-bold leading-7 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Notion Free →
                </a>
                {/* <a
                  href="#"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
            <div className="mt-1 sm:mt-2">
              <div className="lg:m-1 lg:p-1">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
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
              {/* <defs>
                <linearGradient
                  id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs> */}
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
