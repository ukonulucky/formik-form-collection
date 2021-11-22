import React, { useState, useEffect, useContext} from 'react'
import { data1 } from '../App'

function Counter() {
  const data =  useContext(data1)
    const [value, setValue] = useState(0)

    const Timer = () => {
    setValue(prev => prev + 1)
    }
    useEffect(() => {
        const counter = () => {
            setInterval(Timer, 1000)
        }
        counter()
        return () => {
            clearInterval(counter())
        }
    }, [])
    return (
        <div>
            {value}
            <p>information coming from { data}</p>
        </div>
    )
}

export default Counter
