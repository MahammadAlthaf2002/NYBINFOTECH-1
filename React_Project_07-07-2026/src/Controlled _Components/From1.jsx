import React, { useState } from 'react'
import UseState from '../components/statemanagement/UseState'

const From1 = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const[password , setPassword] =useState("")

    const [username , setUsername] = useState("")
      const [useremail , setUseremail] = useState("")
      const [userpassword , setUserpassword] = useState("")

    function Handlefrom (e){
  e.preventDefault();
  setUsername(name)
  setUseremail(email)
  setUserpassword(password)
}
  return (

    
    <div>
     
<form onSubmit={Handlefrom}>
          <input type='text' placeholder='Enter your name' value ={name} onChange={(e)=>setName(e.target.value) } />
<br></br>
        
        <input type='email' placeholder='Enter your Email' value ={email} onChange={(e)=>setEmail(e.target.value)} />
        <br></br>
      <input type='password' placeholder='Enter your password' value ={password} onChange={(e)=>setPassword(e.target.value)} />
      <br></br>
      <br></br>
      <button type='submit' >submit</button>
</form>
    
      <h2>Name:{username}</h2>
      <h2>Email:{useremail}</h2>
      <h2>Password:{userpassword}</h2>
      
    </div>
  )
}

export default From1
