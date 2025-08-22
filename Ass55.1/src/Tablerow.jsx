import React from 'react'

function Tablerow({num,index}) {
  return (
    <div>
      {num} X {index} = {num * index};
    </div>
  )
}

export default Tablerow
