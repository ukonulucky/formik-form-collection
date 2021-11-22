import React, { useState }from 'react'

function HockCounter() {
    const [Counter, setCounter] = useState(0)
  const  counterUpdate = () => {
        setCounter(Counter + 1)
    }
    return (
        <div>
            <button onClick={() => { counterUpdate() }}>Counter {Counter}</button>
        </div>
    )
}

export default HockCounter
