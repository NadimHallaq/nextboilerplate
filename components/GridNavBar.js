import React from "react";

export default function GridNavBar() {
  return (
    <div>
      <nav class="bg-gray-300 w-full">
        <div class="max-w-9xl mx-auto px-2 sm:px-0 lg:px-0">
          <div class="relative flex items-center justify-between h-16">
            {/* <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {" "}
            </div>{" "} */}
            <div class="inline-flex items-center  h-full">
              <div class="inline-flex flex-shrink-0 items-center text-center px-4 border border-r-0 border-black h-full">
                Anti Cafe
              </div>

              <div className="inline-flex  h-full -space-x-px">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 border border-black bg-white text-black text-sm font-medium "
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 border border-black bg-white text-black text-sm font-medium "
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 border border-black bg-white text-black text-sm font-medium "
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 border border-black bg-white text-black text-sm font-medium"
                >
                  Dashboard
                </a>
              </div>
            </div>{" "}
            <div className="flex-grow h-full border border-l-0 border-r-0 border-black">
              {/* <div className="inline-flex items-center text-center px-4  h-full">
                hello
              </div> */}
            </div>
            <div className="h-full border  border-black">
              <div className="inline-flex items-center text-center px-4   h-full">
                hello
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
