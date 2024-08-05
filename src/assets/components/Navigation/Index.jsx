import React from "react";

const Navigation = ({ setCurrentPage }) => (
  <div class="flex justify-center gap-10 mt-10">
    <a>
      <button
        class="flex items-center justify-center rounded-2xl text-sm h-9 px-4 py-2 font-bold bg-gradient-to-r from-red-500 to-red-800 hover:from-red-600 hover:to-red-900 text-white"
        onClick={() => setCurrentPage("Introduction")}
      >
        Home
      </button>
    </a>
    <a>
      <button
        class="flex items-center justify-center rounded-2xl text-sm h-9 px-4 py-2 font-bold bg-gradient-to-r from-red-500 to-red-800 hover:from-red-600 hover:to-red-900 text-white"
        onClick={() => setCurrentPage("AboutMe")}
      >
        About me
      </button>
    </a>
    <a>
      <button
        class="flex items-center justify-center rounded-2xl text-sm h-9 px-4 py-2 font-bold bg-gradient-to-r from-red-500 to-red-800 hover:from-red-600 hover:to-red-900 text-white"
        onClick={() => setCurrentPage("Experience")}
      >
        Experience
      </button>
    </a>
  </div>
);

export default Navigation;
