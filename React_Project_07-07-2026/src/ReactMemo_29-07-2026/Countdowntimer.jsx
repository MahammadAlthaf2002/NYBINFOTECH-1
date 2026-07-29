import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const countdowntimer  = () => {
    const [seconds , setSeconds] = useState(0);
    const [time , setTIme]=useState(0);
    const[running , setRunning]=useState(false)
    useEffect(()=>{
        let timer;
        if (running && time >0){
            timer = setInterval(() => {
                setTimeout((pev )=>pev -1 )
            }, 1000);
        }
        if (time===0){
            setRunning(false)

        }
        return () => clearInterval(timer);
        
        },[running ,time])

        const starttimer =() =>{
            settime(seconds);
            setRunning(true);
        }
        const  pausetimer =()=>{
            setRunning(false);

        }
        const ResetTimer=()=>{
            setrunning (false)
            setTImer(0)
            setseconds(0)
        }
        return()

}
    <div>

      <h2>Countdown Timer</h2>
      <input 
      type ="number" placeholder='Enter seconds'
      value ={seconds}
      onChange={ (e)=> setSeconds(Number(.target.value))}/>

      <br></br>

      <button onClick={SetTimer}>Start</button>
      <button onClick={PauseTimer}>Pause</button>
      <button onClick={ResetTimer}>Reset</button>
      
<h2>time lift = {time} </h2>
    </div>
export default countdowntimer 


