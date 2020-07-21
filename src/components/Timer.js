import React, { useState, useEffect } from 'react'

export  default function Timer (props) {
   
    const [counter,setCounter]=useState(5)
    let [i,setI]=useState(null)
   
   
useEffect(()=>{
const  c= counter-1;
if(c==0){
    props.timeOutf(true)
}
    setInterval(()=>{
   setCounter(c)
    },1000)
 

    })
    





    return(
        
        <div className="timer">
            {props.toggle?
            <p style={{fontSize:50}}> {counter}</p>:
            <p style={{fontSize:50}}>{counter}</p>}
     
        </div>
    )
}