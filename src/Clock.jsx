 import React,{useState} from 'react';

 function Clock(){

    let time = new Date().toLocaleTimeString()
    let [currentTime,settime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        settime(time)
    }

    setInterval(updateTime, 1000);

     return(
         <>
              <h1 className="time_text">{currentTime}</h1>
         </>

     )
 }
 
 export default Clock