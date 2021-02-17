import React from "react";

export default function Pagination() {
  return (
    <div>
      <nav class="  inline-flex shadow-sm -space-x-px" aria-label="Pagination">
        <a
          href="#"
          class=" inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          home
        </a>
        <a
          href="#"
          class=" inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          dashbaord
        </a>
        <a
          href="#"
          class="hidden md:inline-flex  items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          3
        </a>
        <span class=" inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
        <a
          href="#"
          class="hidden md:inline-flex  items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          8
        </a>
        <a
          href="#"
          class=" inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          9
        </a>
        <a
          href="#"
          class=" inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          10
        </a>
      </nav>
    </div>
  );
}
