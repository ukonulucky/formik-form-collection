import React, { useState, useEffect, useRef} from 'react'

function Focus2() {
    const [counter, setcounter] = useState(0)
    const ref = useRef()
     useEffect(() => {
        
       ref.current =  setInterval(() => {
        setcounter(prev => prev + 1)
         }, 1000)
         return () => {
             clearInterval(ref.current)
         }
     }, [])
    return (
        <div>
            counter -- {counter}
            <button onClick={() => { clearInterval(ref.current)}}>stop timer</button>
        </div>
    )
}

export default Focus2
