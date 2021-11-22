import React, { useState, useContext } from 'react'
import MouceMover from './MouceMover'
import { info } from '../App'

function MouseMover2() {
   const data  = useContext(info)
    const [display, setdisplay] = useState(false)
    return (
        <div>
            <button onClick={() => { setdisplay(!display) }}>Toggle Display</button>
            {display && <MouceMover />}
            <p>information loaded and coming from { data}</p>
           
        </div>
    )
}

export default MouseMover2
