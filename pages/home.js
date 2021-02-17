import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import Hero from "../components/anticafe/Hero";
import SlideOver from "../components/SlideOver";
import { usePreventScroll, OverlayProvider } from "@react-aria/overlays";
export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  usePreventScroll({ isDisabled: !isOpen });

  function onClose() {
    setIsOpen(false);
  }
  return (
    <OverlayProvider>
      <div className="m-2 p-2 h-full border-2 border-black w-auto">
        <div className="border-b-2  border-black pb-2">
          {/* Destop Header */}
          <div className="sm:hidden flex justify-between ">
            <span className="inline-flex items-center text-black font-bold">
              Anticafe
            </span>
            <Image
              src="/images/anticafeLOGO.jpg"
              alt="Anti Cafe Logo"
              fixed="fixed"
              width={50}
              height={50}
            />
            <button className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div class="hidden sm:flex">
            <div class="flex divide-x-2 divide-black">
              <NextLink href="/">
                <a className="px-4 py-2 font-bold text-md hover:bg-red-100 transition duration-500">
                  Home
                </a>
              </NextLink>
              <NextLink href="/">
                <a className="px-4 py-2 font-bold text-md hover:bg-red-100 transition duration-500">
                  Cafe
                </a>
              </NextLink>
              <NextLink href="/">
                <a className="px-4 py-2 font-bold text-md hover:bg-red-100 transition duration-500">
                  About Us
                </a>
              </NextLink>
              <NextLink href="/">
                <a className="px-4 py-2 font-bold text-md hover:bg-red-100 transition duration-500">
                  Contact
                </a>
              </NextLink>{" "}
            </div>
            <div className="flex-grow"></div>
            <button
              onClick={() => setIsOpen(true)}
              className="border-2  border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black hover:bg-gray-200 transition duration-500 transform hover:-translate-y-1"
            >
              Reserve
            </button>
            <SlideOver title={"Main Menu"} onClose={onClose} isOpen={isOpen}>
              <h1 className="mb-2">Input Form</h1>
              <div className="flex flex-col">
                {" "}
                <input type="text" className="border-2 border-black p-2 " />
                <button
                  type="submit"
                  className="bg-green-800 text-white mt-2 p-2"
                >
                  Submit
                </button>
              </div>
            </SlideOver>
          </div>
        </div>{" "}
        <Hero />
      </div>
    </OverlayProvider>
  );
}
