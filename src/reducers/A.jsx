import React, { useContext} from 'react'

import { contextState } from '../App'


function A() {
    const context = useContext(contextState)
    const { countState1, countDispatch1 } = context
       
const actionCountAdd = () => {
    return {
        type: "add",
        payload: ""
    }
}
 const actionCountRemove = () => {
    return {
        type: "remove",
        payload: ""
    }
}

const actionCountDefault = () => {
    return {
        type: "default",
        payload: ""
    }
}
    return (
        <div>
            CounterA: {countState1.count}
            <button onClick={() => { countDispatch1(actionCountAdd()) }} >Add</button>
            <button onClick={() => { countDispatch1(actionCountRemove()) }} >Remove</button>
            <button onClick={() => {  countDispatch1(actionCountDefault()) }} >Default</button>
        </div>
    )
}

export default A
