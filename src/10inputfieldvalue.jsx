import { useState } from "react"

function Inp(){
    const [name,setname]=useState()
    return(
        <div>
            <h1>Get Input filed value</h1>
            <input type="text" placeholder="Enter user name"  onChange={(event)=>setname(event.target.value)} value={name}></input>
            <h1>{name}</h1>
            <button onClick={()=>setname("")}>clear</button>
        </div>
    )
}

export default Inp