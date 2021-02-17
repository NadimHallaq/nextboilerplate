import React from "react";

export default function LineButton() {
  return (
    <div className="p-4 flex  flex-col-reverse items-center justify-center">
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        buttun text
      </button>
      <div className="mt-5" />
      <button className="inline-flex items-center px-4 py-2 border-2 border-black text-sm font-medium  text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black">
        buttun text
      </button>
    </div>
  );
}
