import { useRef } from "react"

function UseRef(){
    const inputRef=useRef(null)
    const h1Ref=useRef(null)

    const inputHandler=()=>{
        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.placeholder='enter password';
        inputRef.current.value=123
    }
    const toggleHandler=()=>{
        if(inputRef.current.style.display!='none'){
            inputRef.current.style.display='none'
        }else{
            inputRef.current.style.display='inline'
        }
    }
    const h1handler=()=>{
        h1Ref.current.style.color="red"
    }
    return(
        <div>
            <h1>useRef</h1>
            <input ref={inputRef} type="text" placeholder="Enter ur name"/><br />
            <button onClick={inputHandler}>fucus</button>
            <button onClick={toggleHandler}>toggle</button>

            <h1 ref={h1Ref}>hello</h1>
            <button onClick={h1handler}>handler</button>
        </div>
    )
}

export default UseRef