import React from 'react'
import { FaSpinner } from "react-icons/fa6";

function Loading() {
  return (
    <div className="text-center text-7xl animate-spin grow flex justify-center items-center">
      <FaSpinner />
    </div>
  );
}

export default Loading
