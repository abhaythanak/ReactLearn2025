import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';

function App1Redux() {
    const [amount, setAmount] = useState(0)
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch()


    function handleIncrementClick() {
        dispatch(increment())
    }
    function handleDecrementClick() {
        dispatch(decrement())
    }
    function handleReset() {
        dispatch(reset())
    }
    function IncAmount() {
        dispatch(incrementByAmount(amount))
    }
  return (
    <div>
        <button onClick={handleIncrementClick}>+</button>
        <br />
        <p>Count:{count}</p>
        <br />
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <button onClick={handleReset}>reset</button>
        <br />
        <input type="Number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='amount' />
        <br />
        <button onClick={IncAmount}>Inc.Amount</button>
    </div>
  )
}

export default App1Redux