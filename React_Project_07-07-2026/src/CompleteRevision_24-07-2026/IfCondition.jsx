import React, { useState } from 'react'

const IfCondition = () => {
  const [login , setLogin]=useState(true)
     if(login ) {
  
  return (
    <div>
   


        <h2>Welcome User</h2>
<button onClick= {() => setLogin(false)} > Logout</button>
</div>
        )
}

else{
  return (
    <div>

  <h2>please logout</h2>
  
  <button onClick= {() => setLogin(true)}> Login </button>
  

    </div>
  )
}
}

export default IfCondition
