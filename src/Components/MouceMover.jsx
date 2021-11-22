import React, { useState, useEffect } from 'react'

export default function MouceMover() {
    const initialState = {
        X: 0,
        Y: 0
    }
    
   const [state, setstate] = useState(initialState)
    const mousePosition = e => {
        setstate({
            X: e.clientX,
            Y: e.clientY
    })
    }
  

    
    useEffect(() => {
       window.addEventListener("mousemove", mousePosition);
       return () => {
           window.removeEventListener("mousemove", mousePosition)
       }
       
   })
  
    return (
        <div>
            X:{state.X} and Y: {state.Y}
        </div>
    )
}
