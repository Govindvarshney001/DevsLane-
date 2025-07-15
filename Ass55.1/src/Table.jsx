import React, { useState } from "react";
import Tablerow from './Tablerow'

function Table() {
    const [num, setNum] = useState(2);


     function NextTable() {
        setNum(num + 1);
     }

  return (
    <div>
      <button
        onClick={NextTable}
        className="border px-5 py-2 rounded bg-blue-700"
      >
        Next
      </button>
      <Tablerow num={num} index={1} ></Tablerow>
      <Tablerow num={num} index={2} ></Tablerow>
      <Tablerow num={num} index={3} ></Tablerow>
      <Tablerow num={num} index={4} ></Tablerow>
      <Tablerow num={num} index={5} ></Tablerow>
      
    </div>
  );
}

export default Table
