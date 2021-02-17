export default function SimpleNavBar() {
  return (
    <div className="flex border-2 border-black">
      <div className="hidden sm:flex divide-x-2 divide-black h-16 ">
        <button className="inline-flex items-center py-4 px-6 focus:outline-none focus:ring-2 focus:ring-black  transform focus:translate-y-4 focus:bg-green-400">
          Hello
        </button>
        <button className="flex items-center py-4 px-6 focus:outline-none focus:ring-2 focus:ring-black focus:border-l-0  transform focus:translate-y-4 focus:bg-green-400">
          Hello
        </button>
        <button className="inline-flex items-center py-4 px-6 focus:outline-none focus:ring-2 focus:ring-black  transform focus:translate-y-4 focus:bg-green-400">
          Hello
        </button>
      </div>
      <div className="sm:hidden h-full">
        <div className="flex items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-8 w-8 "
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
