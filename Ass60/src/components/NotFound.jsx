import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex  flex-col space-y-5 items-center justify-center cover h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <img
        className="h-2/3"
        src="https://imgs.search.brave.com/DiMsKnjBjRV2xcOsOzgjMcizz7Tm3Tv-Z95Wyvg2Cko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85Ny84Ni9w/YWdlLW5vdC1mb3Vu/ZC1lcnJvci00MDQt/dmVjdG9yLTQwMDk3/ODYuanBn"
        alt=""
      />
      <Link to="/">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound
