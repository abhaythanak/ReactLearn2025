import React, { useRef } from "react";

function Ref() {
    let countRef = useRef(0) 
    let amountRef = useRef(null)
  function handleIncrementClick() {
    countRef.current += 1
  }
  function handleDecrementClick() {
    countRef.current -= 1
  }
  function handleReset() {
    countRef.current = 0
  }
  function IncAmount() {
    countRef.current += Number(amountRef.current.value)
  }
 
  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <br />
      <p>Count:{countRef.current}</p>
      <br />
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <button onClick={handleReset}>reset</button>
      <br />
      <br />
        <input type="Number" ref={amountRef}  placeholder='amount' />
        <br />
        <button onClick={IncAmount}>Inc.Amount</button>
    </div>
  );
}

export default Ref;
