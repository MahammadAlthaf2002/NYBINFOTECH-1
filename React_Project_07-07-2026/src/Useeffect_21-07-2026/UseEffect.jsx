import React, { useState } from 'react'

const UseEffect = () => {

    const{count , setCount} =useState(0);
    function increase(){
        setCount(Count+1);
    }

  return (
    <div>
      <button onClick={increase} > increase</button>
    </div>
  )
}

export default UseEffect
