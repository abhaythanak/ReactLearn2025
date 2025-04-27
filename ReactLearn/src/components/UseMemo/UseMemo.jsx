import React, { useState,useMemo } from 'react'

function UseMemo() {
    // expensive operation , time , memory, 
    const [count, setCount] = useState(0)
    const [input, setInput] = useState(0)

    function expensiveTask(n){
        console.log("Inside Expensive Task")
        for (let i=0; i<= 1000000000; i++){}
        return n*2
    }

   //let DoubleCount = expensiveTask(input)

   // useMemo(() => calculativefunction, [Dependancys])

   let DoubleCount = useMemo(() => expensiveTask(input), [input])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <div className="">Count: {count}</div>
        <input type="number" value={input} placeholder='enter a number' onChange={(e)=>setInput(e.target.value) } />
        <div className="">Double: {DoubleCount}</div>
    </div>
  )
}

export default UseMemo