import React from "react"


function Child(props) {
   let {buttonName,handleClick} = props
    console.log("child component re-render")
  return (
    <div>
        <button onClick={handleClick}>
            {buttonName}
        </button>
       
    </div>
  )
}

export default React.memo(Child)

//    or Another Way

// const Child = React.memo(
//     (props) => {
//       console.log("child component re-render");
    
//       return (
//         <div>
//           <button onClick={props.handleClick}>
//             {props.buttonName}
//           </button>
//         </div>
//       )
//     }
//   )
  
//   export default Child;