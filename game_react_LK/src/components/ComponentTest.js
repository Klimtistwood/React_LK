import React from "react"



const ComponentTest = ({func, msg}) => {
    console.log(typeof func)
    return (
        
        <button onClick={() => {func()}}>{msg}</button>
    )
}

export default ComponentTest;