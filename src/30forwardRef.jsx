import { useRef } from "react"
import UserInput from "./30UserInput"

function Forw(){
    const inputRef=useRef(null)

    const updateInput = ()=>{
        inputRef.current.value=1000
        inputRef.current.focus()
    }

    return(
        <div>
            <h1>forward Ref </h1>
            <UserInput ref={inputRef}/>
            <button onClick={updateInput}>update input field</button>
        </div>
    )
}

export default Forw