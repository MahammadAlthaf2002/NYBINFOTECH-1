import React from 'react'

const Child1 = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age:{props.age}</h1>
        <h2>CIty:{props.city}</h2>
      <h2>Cousre :{props.course}</h2>
    </div>
  )
}

export default Child1
