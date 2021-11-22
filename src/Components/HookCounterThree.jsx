import React, { useState } from 'react'


function HookCounterThree() {
    const initialState = {
        firstName: "",
        lastName: ""}
const [input, setinput] = useState(initialState)
    return (
        <div>
            <input type="text" value={input.firstName} onChange={(e) => {
                setinput({
                ...input, firstName: e.target.value
                })
            }} />
            
            <input type="text" value={input.lastName} onChange={(e) => {
                setinput({
                ...input, lastName: e.target.value
            })}}/>
            <h2>firstName: {input.firstName}</h2>
            <h2>lastName: { input.lastName}</h2>
            
        </div>
    )
}

export default HookCounterThree
