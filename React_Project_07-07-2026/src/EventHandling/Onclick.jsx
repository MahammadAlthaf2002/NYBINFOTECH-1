import React from 'react'

const OnClick = () => {

  const handleClick = () => {
    alert("Button Clicked")
  }

  return (
    <div>
      <h1>OnClick Event Handling</h1>
      <button onClick= {handleClick } >Click Me</button>
    </div>
  )
}

export default OnClick
