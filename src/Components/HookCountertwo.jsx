import React, { useState } from 'react'

function HookCountertwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const addCount = () => { setCount(prev => prev + 1) }
    const reduceCount = () => { setCount(prev => prev - 1) }
    const setDefault = () => { setCount(initialState) }
    const increaseFive = () => { setCount (prev => prev + 5)}
    return (
        <div>
            Count: {count}
            <button onClick={() => { addCount() } }> Add count</button>
            <button onClick={() => { reduceCount() }}> reduce count</button>
            <button onClick={() => { setDefault() }}> setDefault</button>
            <button onClick={() => { increaseFive() }}> Increase By Five</button> 
        </div>
    )
}

export default HookCountertwo