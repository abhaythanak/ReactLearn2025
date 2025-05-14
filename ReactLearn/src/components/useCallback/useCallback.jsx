import { useCallback, useState } from "react"
import Child from "./Child"


function UseCallback() {

    // function reference cache, memoize, freez // rerender of child component to avoid
    // child component re-render every time when i'll click increment
    const [count, setCount] = useState(0)

    // useCallback(
    //   () => {
    //     first
    //   },
    //   [second],
    // )
    
    // function handleClick() {
    //     setCount(pre=>pre+1)
    // }

    const handleClick = useCallback( ()=> {
        setCount(pre=>pre+1)
    },[])
    
    
  return (
    <div>
        <div className="">count: {count}</div>
        <div className="">
            <button onClick={handleClick}>Increment</button>
        </div>
        <br/>
        <div className="">
          <Child  buttonName="click here to feel good" handleClick={handleClick}/>
        </div>
    </div>
  )
}

export default UseCallback