import React, { useState } from 'react'

const TernaryOpertor = () => {
    const [login , setlogout] = useState(true)


  return (
    <div>
      
      <h2>{login ? "welcomeuser" : "please logout "}</h2>
      <button onClick={() => setlogout(!login)}> {login ? "logout" :"login" }</button>

    </div>
  )
}

export default TernaryOpertor
