import React, { useState, useEffect } from 'react'

function HookCounterFour() {
    const [item, setitem] = useState([])
    const [detail, setdetail] = useState({
        name: "",
        age: ""
    })

    const handleChange1 = (e) => {
        
        setdetail({
            ...detail, name: e.target.value
        })
        console.log(detail)
    }
    const handleChange2 = (e) => {
        setdetail({
            ...detail, age: e.target.value
        })
        console.log(detail)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(item)
        setitem((prev) => {return [...prev,detail] })
      console.log(item)
    }

    
    const data = item.map((value) => {
        return (
            <div key={item.length}>
                <p> Hi, my name is {value.name} and i am {value.age} years old</p>
            </div>
       )
    })
    return (
        <div>
            <form action="" onSubmit={(e) => { handleSubmit(e)}}>
                <p>name: <input type="text" value={detail.name} onChange={(e) => { handleChange1 (e)}} /></p>
                <p>Age:<input type="number" value={detail.age} onChange={(e) => { handleChange2(e) }} /></p>
                <button type="button" onClick={(e) => { handleSubmit(e)}}>Submit</button>
            </form>
         <div> { data }</div>
        </div>
    )
}

export default HookCounterFour
