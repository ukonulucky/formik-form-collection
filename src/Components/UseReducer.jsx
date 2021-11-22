import React, { useReducer } from 'react'

function UseReducer() {
    const initialState = {
        count1: 0,
        count2:10
    }
    const reducer = (state, { type, payload}) => {
        switch (type) {
            case "increase": return {...state, count1:state.count1 + payload}
                
                break;
                case "decrease": return {...state, count1: state.count1 - payload}
                
                break;
                case "increase2": return {...state, count2:state.count2 + payload}
                
                break;
                case "decrease2": return {...state, count2: state.count2 - payload}
                
                break;
                case "reset": return state
                
                break;
        
        
                case "default": return initialState
                
                break;
        
        
            default: return state
                break;
        }
    }
    const count1IncreaseByOne = () => {
        return {
            type: "increase",
            payload: 1
        }
    }
    const count1DecreaseByOne = () => {
        return {
            type: "decrease",
            payload: 1
        }
    }
    const count2IncreaseByFive = () => {
        return {
            type: "increase2",
            payload: 5
        }
    }
    const count2DecreaseByFive = () => {
        return {
            type: "decrease2",
            payload: 5
        }
    }
    const Default = () => {
        return {
            type:"default"
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>count1 state {state.count1}</p>
            <p>count1 state {state.count2}</p>
            <button onClick={() => { dispatch(count1IncreaseByOne()) }}>count1 Increase</button>
            <button onClick={() => {dispatch(count1DecreaseByOne()) }}>count1 Decrease</button>
            <button onClick={() => { dispatch(count2IncreaseByFive())}}>count2 Increas</button>
            <button onClick={() => { dispatch(count2DecreaseByFive())}}>count2 Decrease</button>
            <button onClick={() => { dispatch(Default() )}}>Default</button>
        </div>
    )
}

export default UseReducer
